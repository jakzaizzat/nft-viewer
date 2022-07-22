import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        p={4}
        h="calc(100vh)"
        alignItems="center"
        justifyContent="center"
      >
        <Container>
          <Heading mb={4}>Welcome to NFT Viewer</Heading>
          <Text color="gray.700" fontSize="lg" mb={2}>
            Search by contract address
          </Text>

          <Flex gap={4}>
            <Input placeholder="Contract Address" />
            <Button>Search</Button>
          </Flex>
        </Container>
      </Flex>
    </div>
  )
}

export default Home
