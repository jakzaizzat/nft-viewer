import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" p={4}>
        <h1>Hello Next.js</h1>
      </Box>
    </div>
  )
}

export default Home
