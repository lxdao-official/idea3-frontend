import { Button, Container, Input, Text, Textarea } from '@nextui-org/react';
import {
  useAccount,
  useClient,
  useEnsName,
  useNetwork,
  useSigner,
} from 'wagmi';
import styles from '../styles/Home.module.css';
import { Dayjs } from 'dayjs';

import Idea3Head from '../components/Head';
import TaskNav from '../components/TaskNav';
import { useIdea } from '../lib/idea3';
import { useEffect, useState } from 'react';
import { LXDAOLogo, LXDAOIntroduction } from 'lxdao-ui';
import { List } from '../components/List';
import { toast } from 'react-hot-toast';

export interface Order {
  amount: number;
  deadlineTimestamp: number;
}

export interface OrderGroup {
  title: string;
  employer: string;
  publisher: string;
  intercessor: string;
  token: string;
  orders: Order[];
}

export interface MileStone {
  amount: number;
  ddl: Dayjs;
}

export default function Home() {
  const { address, isConnected, status } = useAccount();
  const { data: ensName } = useEnsName(address);

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const idea = useIdea();

  const [submiting, setSubmiting] = useState(false);

  async function submit() {
    setSubmiting(true);
    const loading = toast.loading('Submitting...');
    try {
      if (!title || !description || !name) {
        throw new Error('Please input all fields');
      }
      const res = await idea.submitIdea(title, description, name);
      await res.wait();
      toast.success('Submit Success');
    } catch (e: any) {
      toast.error(e.message || e.error.message);
    }
    toast.dismiss(loading);
    setSubmiting(false);
  }

  useEffect(() => {
    if (ensName) {
      setName(ensName);
    }
  }, [ensName]);

  return (
    <div className={styles.container}>
      <Idea3Head />
      <main className={styles.main}>
        <TaskNav />
        <Container
          display="flex"
          alignItems="center"
          justify="center"
          css={{ marginTop: '4vh' }}
        >
          <Container css={{ mw: '840px', p: '20px' }}>
            <Container>
              <Text
                size={26}
                css={{
                  as: 'center',
                  mb: '20px',
                }}
              >
                Submit New Idea
              </Text>
            </Container>
            <Container>
              <Input
                label="title"
                placeholder="Please input idea title, max 30 characters"
                maxLength={30}
                width="100%"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                label="description"
                placeholder="Please input idea description, max 100 characters"
                maxLength={100}
                width="100%"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                label="your name"
                placeholder="Please input your name, max 30 characters"
                maxLength={30}
                width="100%"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Container>
            <Container css={{ mt: '20px' }}>
              {isConnected ? (
                <Button
                  color="primary"
                  auto
                  onClick={submit}
                  disabled={submiting}
                >
                  Submit on Chain
                </Button>
              ) : (
                // <ConnectButton />
                <Text>Connect Wallet First</Text>
              )}
            </Container>
          </Container>
        </Container>
        <Container
          display="flex"
          alignItems="center"
          justify="center"
          css={{ marginTop: '50px' }}
        >
          <Container css={{ p: '0px 120px' }}>
            <Text
              size={26}
              css={{
                as: 'center',
                mb: '20px',
              }}
            >
              Idea List
            </Text>
            <List />
          </Container>
        </Container>
      </main>
      <footer className={styles.footer}>
        <LXDAOLogo />
      </footer>
    </div>
  );
}
