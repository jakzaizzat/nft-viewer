import { Flex, Button, Heading } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export default function Header() {
  return (
    <Flex as="nav" alignItems="center" justifyContent="space-between">
      <Link href="/">
        <Heading cursor="pointer" size="md">
          NFT Viewer
        </Heading>
      </Link>
      <ConnectButton  />
    </Flex>
  )
}
