import { Badge, Button, Pagination, Table } from '@nextui-org/react';
import { utils } from 'ethers';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAccount } from 'wagmi';
import { config } from '../config';
import { useIdeaNFTRead, useIdeaSBTRead } from '../lib/idea3';
import { IdeaSBT } from '../typechain-types/contracts/idea3/IdeaSBT';

export function List() {
  const { address, isConnected, status } = useAccount();
  const [ideas, setIdeas] = useState<
    (IdeaSBT.IdeaStructStructOutput & {
      isTokenOwner?: boolean;
    })[]
  >([]);

  const [ideaCount, setIdeaCount] = useState(0);
  const [nowPage, setNowPage] = useState(1);
  const idea = useIdeaSBTRead();
  const ideaNFT = useIdeaNFTRead();

  const [isOwner, setIsOwner] = useState(false);

  async function getIdeas(_page: number = 1) {
    const ideaCount = await idea.ideaCount();
    setIdeaCount(ideaCount.toNumber());

    const _ids = [];
    for (let i = 0; i < 10; i++) {
      _ids.push(i + (_page - 1) * 10);
    }
    let _ideas: (IdeaSBT.IdeaStructStructOutput & {
      isTokenOwner?: boolean;
    })[] = [];
    _ideas = await idea.getIdeas(_ids);
    console.log('ideas', _ideas);

    _ideas = _ideas.filter((idea) => idea.title !== '');

    setIdeas(_ideas);

    for (let i = 0; i < _ideas.length; i++) {
      const idea = _ideas[i];
      const isTokenOwner = await ideaNFT.ownerOf(idea.id);
      if (isTokenOwner === address) {
        _ideas[i].isTokenOwner = true;
      }
    }

    setIdeas(_ideas);
  }

  async function getOwner() {
    const owner = await ideaNFT.owner();
    console.log('owner', owner);
    if (owner === address) {
      setIsOwner(true);
    }
  }

  async function approve(tokenId: string) {
    const loading = toast.loading('Approving...');
    try {
      const res = await ideaNFT.approveIdea(tokenId);
      await res.wait();
      toast.success('Approve Success');
      getIdeas();
    } catch (e: any) {
      toast.error(e.message || e.error.message);
    }
  }
  async function buy(tokenId: string) {
    const loading = toast.loading('Buying...');
    try {
      const info = await ideaNFT.orderOfTokenId(tokenId);
      const price = info.price;

      const res = await ideaNFT.buy(tokenId, {
        value: price,
      });
      await res.wait();
      toast.success('Buy Success');
      getIdeas();
    } catch (e: any) {
      toast.error(e.message || e.error.message);
    }
  }
  async function list(tokenId: string, price: number, duration: number) {
    const loading = toast.loading('Listing...');
    try {
      const res = await ideaNFT.list(
        tokenId,
        utils.parseEther(price.toString()),
        duration,
      );
      await res.wait();
      toast.success('List Success');
      getIdeas();
    } catch (e: any) {
      toast.error(e.message || e.error.message);
    }
  }

  useEffect(() => {
    getIdeas();
    getOwner();
  }, [isConnected]);

  useEffect(() => {
    getIdeas(nowPage);
  }, [nowPage]);

  return (
    <div>
      <Table
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
      >
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
                <Table.Cell>{'#' + idea.id.toString()}</Table.Cell>
                <Table.Cell>
                  <div
                    style={{
                      width: '320px',
                      paddingRight: '30px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '16px',
                        width: '300px',
                      }}
                    >
                      {idea.title}
                    </div>
                    <div
                      style={{
                        color: 'gray',
                        fontSize: '12px',
                        width: '300px',
                      }}
                    >
                      {idea.content}
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    {idea.submitterName}
                  </div>
                  <div
                    style={{
                      color: 'gray',
                      fontSize: '12px',
                    }}
                  >
                    {idea.submitter}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {idea.approved ? (
                    <Badge
                      color="success"
                      style={{
                        width: '50px',
                        paddingRight: '20px',
                      }}
                    >
                      YES
                    </Badge>
                  ) : (
                    <Badge
                      style={{
                        width: '50px',
                        paddingRight: '20px',
                      }}
                    >
                      NO
                    </Badge>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '20px',
                      alignItems: 'center',
                      width: '100px',
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
                        href={`${config.opensea}/${config.nft}/${idea.id}`}
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
                      justifyContent: 'center',
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
                    <Button
                      size={'xs'}
                      onClick={() => {
                        buy(idea.id.toString());
                      }}
                    >
                      Buy
                    </Button>
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
            marginLeft: '10px',
          }}
        >
          Total: {ideaCount}
        </span>
      </div>
    </div>
  );
}
