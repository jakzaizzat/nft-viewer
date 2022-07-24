import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '../components/Layout'
import useNotify from '../hooks/useNotify'

const Home: NextPage = () => {
  const [contractAddress, setContractAddress] = useState(
    '0x134460d32fc66a6d84487c20dcd9fdcf92316017', // Woodies NFT contract address
  )
  const notify = useNotify()
  const router = useRouter()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!contractAddress) {
      notify('Please enter a contract address')
      return
    }
    router.push(`/${contractAddress}`)
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box paddingY={16}>
          <Heading mb={4}>Welcome to NFT Viewer</Heading>
          <Text color="gray.700" fontSize="lg" mb={2}>
            Search by contract address
          </Text>

          <Flex gap={4}>
            <Input
              placeholder="Contract Address"
              required
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
            />
            <Button onClick={handleSubmit}>Search</Button>
          </Flex>
        </Box>
      </Layout>
    </div>
  )
}

export default Home
