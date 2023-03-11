import { Container } from '@mui/system';
import { Button, Input, Modal, Text } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useAccount } from 'wagmi';
import { BindDidContext, DIDContext, useDID } from '../contexts/did.context';
import { useIdeaDID, useIdeaSBT } from '../lib/idea3';

export default function MintDID() {
  const { showMintModal, closeMintModalHandler } = useContext(DIDContext);
  const { showBindDidModalHandler } = useContext(BindDidContext);
  const [submiting, setSubmiting] = useState(false);
  const [handle, setHandle] = useState('');
  const { isConnected } = useAccount();
  const did = useIdeaDID();
  const submitMint = async () => {
    setSubmiting(true);
    const loading = toast.loading('Minting...');
    try {
      if (!handle) {
        throw new Error('Please input handle');
      }
      const res = await did.mint(handle);
      await res.wait();
      toast.dismiss(loading);
      toast.success('Mint Success');
      closeMintModalHandler();
      showBindDidModalHandler();
    } catch (e: any) {
      toast.dismiss(loading);

      toast.error(e.error?.message || e.message);
    }
    setSubmiting(false);
  };
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={showMintModal}
      onClose={closeMintModalHandler}
    >
      <Modal.Body
        style={{
          maxHeight: '800px',
          overflow: 'auto',
        }}
      >
        <Text
          id="modal-title"
          size={18}
          weight={'bold'}
          css={{ margin: 0, textAlign: 'center' }}
        >
          Mint Handle
        </Text>
        <div
          style={{
            fontSize: '12px',
            color: '#999',
            textAlign: 'center',
            marginTop: '10px',
          }}
        >
          before everything, you should mint your unique did first
        </div>
        <Input
          placeholder="Please input your handle"
          value={handle}
          maxLength={12}
          minLength={3}
          labelLeft={'@'}
          onChange={(e) =>
            setTimeout(() => {
              e.target.value && setHandle(e.target.value);
            }, 300)
          }
          css={{
            marginTop: '15px',
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        {isConnected ? (
          <Button
            color="primary"
            auto
            onClick={submitMint}
            disabled={submiting}
          >
            Mint
          </Button>
        ) : (
          <ConnectButton />
        )}
      </Modal.Footer>
    </Modal>
  );
}
