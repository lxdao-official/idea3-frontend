import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { LXDAOLogo } from 'lxdao-ui';
import {
  Button,
  Container,
  Input,
  Modal,
  Text,
  Textarea,
} from '@nextui-org/react';
import { useContext, useEffect, useState } from 'react';
import { useAccount, useEnsName, useSigner } from 'wagmi';
import {
  useIdeaDID,
  useIdeaDIDRead,
  useIdeaSBT,
  useIdeaSBTRead,
} from '../lib/idea3';
import toast from 'react-hot-toast';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { List } from '../components/List';
import MintDID from '../components/MintDID';
import BindDID from '../components/BindDID';
import { BindDidContext, DIDContext, useDID } from '../contexts/did.context';

export default function Home() {
  const { showMintModalHandler } = useContext(DIDContext);
  const { showBindDidModalHandler } = useContext(BindDidContext);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  function closeHandler() {
    console.log('close');
    setShowCreateModal(false);
  }

  function closeListHandler() {
    console.log('close');
    setShowListModal(false);
  }
  const { data: signer } = useSigner();
  const { address, isConnected, status } = useAccount();
  const { data: ensName } = useEnsName(address);

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [ideaCount, setIdeaCount] = useState(0);
  const idea = useIdeaSBT();
  const ideaRead = useIdeaSBTRead();
  const didRead = useIdeaDIDRead();

  const [submiting, setSubmiting] = useState(false);

  async function submit() {
    setSubmiting(true);
    const loading = toast.loading('Submitting...');
    try {
      if (!title || !description || !name) {
        throw new Error('Please input all fields');
      }
      const res = await idea.submitIdea(title, description, markdown);
      await res.wait();
      toast.success('Submit Success');

      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (e: any) {
      toast.error(e.message || e.error.message);
    }
    toast.dismiss(loading);
    setSubmiting(false);
  }

  async function getIdeaCount() {
    try {
      const ideaCount = await ideaRead.topicCount();
      setIdeaCount(ideaCount.toNumber());
    } catch (e) {
      console.log(e);
    }
  }

  async function createNewIdea() {
    const didBalance = await didRead.balanceOf(address as string);
    const lockedDid = await didRead.resolveAddressToDid(address as string);
    console.log('lockedDid', lockedDid);
    if (didBalance.toNumber() === 0) {
      showMintModalHandler();
      return;
    } else if (!lockedDid) {
      showBindDidModalHandler();
      return;
    }
    setShowCreateModal(true);
  }

  async function getDid() {
    const lockedDid = await didRead.resolveAddressToDid(address as string);
    setName(lockedDid);
  }

  useEffect(() => {
    getIdeaCount();
  }, []);
  useEffect(() => {
    if (address) {
      getDid();
    }
  }, [address]);

  return (
    <>
      <Head>
        <title>Idea3 - Make more ideas reality</title>
        <meta
          name="description"
          content="Share your ideas, get $IDEA and support from the community, and make
            it reality."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.logo}>
            <Text b color="inherit" size={30}>
              Idea3
            </Text>
          </div>
          <ConnectButton />
        </div>

        <div className={styles.center}>
          <div className={styles.mission}>our mission</div>
          <div className={styles.center_title}>Make more ideas reality</div>
          <div className={styles.sub_title}>
            Share your ideas, get $IDEA and support from the community, and make
            it reality.
          </div>

          <div className={styles.center_button}>
            <Button
              onClick={() => {
                createNewIdea();
              }}
              color="secondary"
              size={'lg'}
            >
              Submit new idea
            </Button>
          </div>
        </div>

        <List />
        <div
          style={{
            marginTop: '50px',
          }}
        >
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LXDAOLogo />
          </a>
        </div>
        <MintDID />
        <BindDID />
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={showCreateModal}
          width="600px"
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Submit new Idea
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Input
                label="title"
                placeholder="Please input idea title, max 30 characters"
                maxLength={70}
                width="100%"
                value={title}
                onChange={(e) =>
                  setTimeout(() => {
                    setTitle(e.target.value);
                  }, 100)
                }
              />
              <Input
                label="did handle"
                maxLength={30}
                width="100%"
                value={name}
                disabled
                labelLeft="@"
              />
              <Textarea
                label="description"
                placeholder="Please input idea description, max 100 characters"
                maxLength={100}
                width="100%"
                value={description}
                onChange={(e) =>
                  setTimeout(() => {
                    e.target.value && setDescription(e.target.value);
                  }, 100)
                }
              />

              <Textarea
                label="other info"
                placeholder="Please input more information, markdown format"
                maxLength={1000}
                width="100%"
                value={markdown}
                onChange={(e) =>
                  setTimeout(() => {
                    e.target.value && setMarkdown(e.target.value);
                  }, 100)
                }
              />
            </Container>
          </Modal.Body>
          <Modal.Footer
            justify="center"
            style={{
              padding: '20px',
            }}
          >
            {isConnected ? (
              <Button
                color="primary"
                auto
                onClick={submit}
                disabled={submiting}
              >
                Submit to Chain
              </Button>
            ) : (
              // <ConnectButton />
              <Text>Connect Wallet First</Text>
            )}
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
}
