import {
  Badge,
  Button,
  Container,
  Input,
  Modal,
  Pagination,
  Table,
  Text,
  Textarea,
} from '@nextui-org/react';
import { utils } from 'ethers';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAccount } from 'wagmi';
import { config } from '../config';
import { useIdeaDIDRead, useIdeaSBT, useIdeaSBTRead } from '../lib/idea3';
import { IdeaSBT } from '../types/contracts/idea3/IdeaSBT';
import styles from '../styles/Home.module.css';
function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
export function List() {
  const { address, isConnected, status } = useAccount();
  const [ideas, setIdeas] = useState<
    (IdeaSBT.IdeaStructStructOutput & {
      isTokenOwner?: boolean;
    })[]
  >([]);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [ideaCount, setIdeaCount] = useState(0);
  const [nowPage, setNowPage] = useState(1);
  const idea = useIdeaSBT();
  const ideaRead = useIdeaSBTRead();
  const didRead = useIdeaDIDRead();
  // const ideaNFT = useIdeaNFTRead();

  const [isOwner, setIsOwner] = useState(false);

  async function getIdeas(_page: number = 1) {
    const ideaCount = await ideaRead.topicCount();
    setIdeaCount(ideaCount.toNumber());

    const _ids = [];
    // 倒序请求
    for (let i = 0; i < 10; i++) {
      const _id = ideaCount.toNumber() - _page * 10 + i;
      if (_id >= 0) {
        _ids.unshift(_id);
      }
    }
    let _ideas: (IdeaSBT.IdeaStructStructOutput & {
      isTokenOwner?: boolean;
    })[] = [];
    _ideas = await ideaRead.getIdeas(_ids);
    console.log('ideas', _ideas);

    _ideas = _ideas.filter((idea) => idea.title !== '');

    setIdeas(_ideas);

    // for (let i = 0; i < _ideas.length; i++) {
    //   const _idea = _ideas[i];
    //   const isTokenOwner = await idea.ownerOf(_idea.id);
    //   if (isTokenOwner === address) {
    //     _ideas[i].isTokenOwner = true;
    //   }
    // }

    setIdeas(_ideas);
  }

  async function getOwner() {
    const owner = await ideaRead.owner();
    if (owner === address) {
      setIsOwner(true);
    }
  }

  async function approve(tokenId: string) {
    // const loading = toast.loading('Approving...');
    // try {
    //   const res = await ideaNFT.approveIdea(tokenId);
    //   await res.wait();
    //   toast.success('Approve Success');
    //   getIdeas();
    // } catch (e: any) {
    //   toast.error(e.message || e.error.message);
    // }
  }
  // async function buy(tokenId: string) {
  //   const loading = toast.loading('Buying...');
  //   try {
  //     const info = await ideaNFT.orderOfTokenId(tokenId);
  //     const price = info.price;

  //     const res = await ideaNFT.buy(tokenId, {
  //       value: price,
  //     });
  //     await res.wait();
  //     toast.success('Buy Success');
  //     getIdeas();
  //   } catch (e: any) {
  //     toast.error(e.message || e.error.message);
  //   }
  // }
  async function list(tokenId: string, price: number, duration: number) {
    // const loading = toast.loading('Listing...');
    // try {
    //   const res = await ideaNFT.list(
    //     tokenId,
    //     utils.parseEther(price.toString()),
    //     duration,
    //   );
    //   await res.wait();
    //   toast.success('List Success');
    //   getIdeas();
    // } catch (e: any) {
    //   toast.error(e.message || e.error.message);
    // }
  }
  const [submiting, setSubmiting] = useState(false);

  async function submit() {
    setSubmiting(true);
    const loading = toast.loading('Submitting...');
    try {
      if (!title || !description || !name) {
        throw new Error('Please input all fields');
      }
      const res = await idea.editIdeaBySubmitter(
        id,
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
  useEffect(() => {
    getIdeas();
    getOwner();
  }, [isConnected]);
  useEffect(() => {
    if (address) {
      getDid();
    }
  }, [address]);
  async function getDid() {
    const lockedDid = await didRead.resolveAddressToDid(address as string);
    setName(lockedDid);
  }

  useEffect(() => {
    getIdeas(nowPage);
  }, [nowPage]);

  return (
    <div style={{}} className={styles.list}>
      <Table>
        <Table.Header>
          <Table.Column>ID</Table.Column>
          <Table.Column>Title</Table.Column>
          <Table.Column>Submitter</Table.Column>
          <Table.Column>Approved</Table.Column>
          <Table.Column>Links</Table.Column>
          <Table.Column>Actions</Table.Column>
        </Table.Header>
        <Table.Body>
          {ideas.map((idea, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell
                  css={{
                    width: '80px',
                  }}
                >
                  {'#' + idea.id.toString()}
                </Table.Cell>
                <Table.Cell>
                  <div
                    style={{
                      paddingRight: '30px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '16px',
                      }}
                    >
                      {idea.title}
                    </div>
                    <div
                      style={{
                        color: 'gray',
                        fontSize: '12px',
                        wordBreak: 'break-all',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {idea.desc}
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell
                  css={{
                    width: '150px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    @{idea.submitterHandle}
                  </div>
                  <div
                    style={{
                      color: 'gray',
                      fontSize: '12px',
                    }}
                  >
                    {formatAddress(idea.submitter)}
                  </div>
                </Table.Cell>
                <Table.Cell
                  css={{
                    width: '120px',
                  }}
                >
                  {idea.approved ? (
                    <Badge
                      color="success"
                      style={{
                        width: '50px',
                      }}
                    >
                      YES
                    </Badge>
                  ) : (
                    <Badge
                      style={{
                        width: '50px',
                      }}
                    >
                      NO
                    </Badge>
                  )}
                </Table.Cell>
                <Table.Cell
                  css={{
                    width: '100px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'center',
                    }}
                  >
                    <a
                      href={`${config.opensea}/${config.sbt}/${idea.id}`}
                      style={{
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/opensea.png"
                        width="18"
                        height="18"
                        style={{
                          marginRight: '5px',
                        }}
                        alt="opensea"
                      />
                      SBT
                    </a>
                    {idea.approved ? (
                      <a
                        style={{
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/opensea.png"
                          width="18"
                          height="18"
                          style={{
                            marginRight: '5px',
                          }}
                          alt="opensea"
                        />
                        NFT
                      </a>
                    ) : null}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      width: '100px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Button
                      size={'xs'}
                      disabled={!isOwner}
                      onClick={() => {
                        approve(idea.id.toString());
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      size={'xs'}
                      disabled={!idea.isTokenOwner}
                      onClick={() => {
                        list(idea.id.toString(), 0.1, 60 * 60 * 24);
                      }}
                    >
                      List for Sale
                    </Button>
                    {idea.submitter == address ? (
                      <Button
                        size={'xs'}
                        onClick={() => {
                          setId(idea.id.toString());
                          setTitle(idea.title);
                          setDescription(idea.desc);
                          setMarkdown(idea.markdown);
                          setShowCreateModal(true);
                        }}
                      >
                        Edit
                      </Button>
                    ) : null}
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div>
        <Pagination
          total={Math.floor(ideaCount / 10) + 1}
          initialPage={nowPage}
          onChange={(_page) => {
            setNowPage(_page);
          }}
          css={{
            marginTop: '40px',
          }}
        />
        <span
          style={{
            marginLeft: '16px',
          }}
        >
          Total: {ideaCount}
        </span>
      </div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={showCreateModal}
        width="600px"
        onClose={() => {
          setShowCreateModal(false);
        }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Edit Idea
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
            <Button color="primary" auto onClick={submit} disabled={submiting}>
              Submit to Chain
            </Button>
          ) : (
            // <ConnectButton />
            <Text>Connect Wallet First</Text>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
