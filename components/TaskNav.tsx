import { Navbar, Text } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function TaskNav() {
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);
  }, []);
  return (
    <Navbar variant="static">
      <Navbar.Brand>
        <Text b color="inherit" size={30}>
          Idea3
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        {/* <Navbar.Link href="/" isActive={router.pathname == '/'}>
          Ideas
        </Navbar.Link> */}
      </Navbar.Content>
      <Navbar.Content>
        <ConnectButton />
      </Navbar.Content>
    </Navbar>
  );
}
