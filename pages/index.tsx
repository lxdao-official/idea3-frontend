import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
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
import { useEffect, useState } from 'react';
import { useAccount, useEnsName, useSigner } from 'wagmi';
import { useIdeaSBT } from '../lib/idea3';
import toast from 'react-hot-toast';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { List } from '../components/List';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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

  const [submiting, setSubmiting] = useState(false);

  async function submit() {
    setSubmiting(true);
    const loading = toast.loading('Submitting...');
    try {
      if (!title || !description || !name) {
        throw new Error('Please input all fields');
      }
      const res = await idea.submitIdea(title, description, markdown, name);
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
      const ideaCount = await idea.ideaCount();
      setIdeaCount(ideaCount.toNumber());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (ensName) {
      setName(ensName);
    }
  }, [ensName]);

  useEffect(() => {
    if (isConnected) getIdeaCount();
  }, [signer]);
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
                setShowCreateModal(true);
              }}
              color="secondary"
              size={'lg'}
            >
              Submit new idea
            </Button>
          </div>
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setShowListModal(true);
            }}
          >
            <h2>
              <span>
                View all ideas ({ideaCount}) <i>-{'>'}</i>
              </span>
            </h2>
            <p>
              All ideas are public goods <br />
              you can support by donate or giving some good advice
            </p>
          </a>

          <a
            href="/ideas.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              <span>
                Whitepaper <i>-{'>'}</i>
              </span>
            </h2>
            <p>Join IdeasDAO's OG community and make it better.</p>
          </a>
          <a
            href="/ideas.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#720ded',
                }}
              >
                $IDEA
                <i>-{'>'}</i>
              </span>{' '}
            </h2>
            <p>
              Learn about $IDEA and how we designed the idea incentive system
            </p>
          </a>
        </div>
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
                maxLength={30}
                width="100%"
                value={title}
                onChange={(e) => e.target.value && setTitle(e.target.value)}
              />
              <Input
                label="your name"
                placeholder="Please input your name, max 30 characters"
                maxLength={30}
                width="100%"
                value={name}
                onChange={(e) => e.target.value && setName(e.target.value)}
              />
              <Textarea
                label="description"
                placeholder="Please input idea description, max 100 characters"
                maxLength={100}
                width="100%"
                value={description}
                onChange={(e) =>
                  e.target.value && setDescription(e.target.value)
                }
              />

              <Textarea
                label="other info"
                placeholder="Please input more information, markdown format"
                maxLength={1000}
                width="100%"
                value={markdown}
                onChange={(e) => e.target.value && setMarkdown(e.target.value)}
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
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={showListModal}
          width="90%"
          onClose={closeListHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Idea List
            </Text>
          </Modal.Header>
          <Modal.Body
            style={{
              maxHeight: '800px',
              overflow: 'auto',
            }}
          >
            <List />
          </Modal.Body>
        </Modal>
      </main>
    </>
  );
}
