import { Badge, Pagination, Table } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { config } from '../config';
import { useIdea, useIdeaRead } from '../lib/idea3';
import { Idea } from '../typechain-types';

export function List() {
  const { address, isConnected, status } = useAccount();
  const [ideas, setIdeas] = useState<Idea.IdeaStructStructOutput[]>([]);

  const [ideaCount, setIdeaCount] = useState(0);
  const [nowPage, setNowPage] = useState(1);
  const idea = useIdeaRead();

  async function getIdeas(_page: number = 1) {
    const ideaCount = await idea.ideaCount();
    setIdeaCount(ideaCount.toNumber());

    const _ids = [];
    for (let i = 0; i < 10; i++) {
      _ids.push(i + (_page - 1) * 10);
    }
    const _ideas = await idea.getIdeas(_ids);
    console.log('ideas', _ideas);
    setIdeas(_ideas.filter((idea) => idea.title !== ''));
  }

  useEffect(() => {
    getIdeas();
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
          <Table.Column width={50}>ID</Table.Column>
          <Table.Column width={250}>Title</Table.Column>
          <Table.Column width={150}>Submitter</Table.Column>
          <Table.Column width={90}>Approved</Table.Column>
          <Table.Column width={100}>Links</Table.Column>
        </Table.Header>
        <Table.Body>
          {ideas.map((idea, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{'#' + idea.id.toString()}</Table.Cell>
                <Table.Cell>
                  <div>
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
                    <Badge color="success">YES</Badge>
                  ) : (
                    <Badge>NO</Badge>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                    }}
                  >
                    <a
                      href={`https://opensea.io/assets/ethereum/${config.contract}/${idea.id}`}
                    >
                      OpenSea
                    </a>
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
