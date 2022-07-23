import { Flex, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
  return (
    <Flex as="nav" alignItems="center" justifyContent="space-between">
      <Link href="/">
        <Heading cursor="pointer" size="md">NFT Viewer</Heading>
      </Link>

      <Button bg="blue.400" color="white">
        Connect Wallet
      </Button>
    </Flex>
  )
}
