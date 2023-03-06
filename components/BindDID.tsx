import { Button, Checkbox, Input, Modal, Radio, Text } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAccount } from 'wagmi';
import { useBindDid, useDID } from '../contexts/did.context';
import { useIdeaDID, useIdeaSBT } from '../lib/idea3';

export default function BindDID() {
  const { showBindDidModal, closeBindDidModalHandler } = useBindDid();

  const [submiting, setSubmiting] = useState(false);
  const [handle, setHandle] = useState('');

  const { address } = useAccount();
  const { isConnected } = useAccount();
  const did = useIdeaDID();
  const submitBind = async () => {
    setSubmiting(true);
    const loading = toast.loading('Binding...');
    try {
      if (!handle) {
        throw new Error('Please select handle');
      }
      const res = await did.lockDid(handle);
      await res.wait();
      toast.dismiss(loading);
      toast.success('Bind Success');
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (e: any) {
      toast.dismiss(loading);
      toast.error(e.message || e.error.message);
    }
    setSubmiting(false);
  };

  const [didList, setDidList] = useState<string[]>([]);
  const fetchDidList = async () => {
    const _didList = await did.getAddressesDIDList(address as string);
    console.log(_didList);
    setDidList(_didList);
  };

  useEffect(() => {
    if (address) {
      fetchDidList();
    }
  }, [address]);
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={showBindDidModal}
      onClose={closeBindDidModalHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Bind did handle
        </Text>
      </Modal.Header>
      <Modal.Body
        style={{
          maxHeight: '800px',
          overflow: 'auto',
        }}
      >
        <Radio.Group
          label="Select did handle to bind"
          orientation="horizontal"
          color="secondary"
          onChange={(value) => {
            setHandle(value[0]);
          }}
        >
          {didList.map((did) => {
            return (
              <Radio value={did} key={did}>
                {did}
              </Radio>
            );
          })}
        </Radio.Group>
      </Modal.Body>
      <Modal.Footer>
        {isConnected ? (
          <Button
            color="primary"
            auto
            onClick={submitBind}
            disabled={submiting}
          >
            Bind DID
          </Button>
        ) : (
          <ConnectButton />
        )}
      </Modal.Footer>
    </Modal>
  );
}
