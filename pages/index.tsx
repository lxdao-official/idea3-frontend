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
import {
  Box,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  Step,
} from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:first-of-type': {
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  '&:last-of-type': {
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '14px' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  fontSize: '20px',
  fontWeight: 'bold',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

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
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const steps = [
    {
      label: '✅ Mint did handle and lock to address',
      description: `1. The user first needs to mint a did, and the did will be minted into an ERC721 NFT (DIDNFT).
2. Bind did with the user's wallet address, and they can be resolved with each other after binding.
3. The bound did nft cannot be transferred, the unbound did nft can be transferred, and the bound did nft can be unbound.`,
    },
    {
      label: '✅ List and submit your idea',
      description: `1. Publish your ideas to the blockchain.
2. Your idea will be minted into an SBT (IdeaSBT), which represents your ownership of the idea`,
    },
    {
      label: '🔜 Comment on idea and like idea',
      description: `1. Everyone can "supplement" your idea, and the supplementary content will be cast as a new SBT (SubIdeaSBT).
2. Everyone can "like" your idea, and the content of the like will be cast as a new SBT (LikeIdeaSBT)`,
    },
    {
      label: 'Governance',
      description: `1. A community vote is held once a week, and excellent ideas that pass the vote will be officially approved.
2. While approving, a certain amount of $IDEA will be mined from the $IDEA mining pool and locked in this idea as a reward for excellent ideas.
3. The approved idea will be minted into a beautiful ERC721 NFT (GoodIdeaNFT) and recommended on the official website. This NFT can be sold.`,
    },
    {
      label: 'Donate',
      description: `1. Everyone can use $IDEA to donate to an idea, and the donated $IDEA is also locked in the idea.
2. At the same time as the donation, $IDEA's matching donation pool will match the donation in a certain proportion.`,
    },
    {
      label: 'Rewards and claims',
      description: `1. 40% of the $IDEA locked in each idea belongs to the publisher, and 60% belongs to the participants (supplement and praise, how to divide the 70% needs to be redesigned).
2. 7 days after the behavior occurs, publishers and participants can claim their own tokens`,
    },
    {
      label: 'About $IDEA',
      description: `1. The $IDEA token is an ERC20 token for circulation within the idea3 platform.
2. Locking and unlocking mechanism`,
    },
  ];
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
      const res = await idea.submitIdea(
        title.replace(/\n/g, '  \n'),
        description.replace(/\n/g, '  \n'),
        markdown.replace(/\n/g, '  \n'),
      );
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

        <div className={styles.roadmap}>
          <div className={styles.roadmap_title}>Roadmap</div>
          <div>
            {steps.map((step, index) => (
              <Accordion
                expanded={activeStep == index}
                onChange={() => {
                  setActiveStep(index);
                }}
                key={index}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>{step.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {step.description.split('\n').map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
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
