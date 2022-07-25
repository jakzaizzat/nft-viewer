import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FullPageScreen from '../../components/FullPageScreen'
import Layout from '../../components/Layout'
import Nft from '../../components/Nft'
import useCollections from '../../hooks/useCollections'
import useNotify from '../../hooks/useNotify'
import { TokenType } from '../../types'

const CollectionPage: NextPage = () => {
  const router = useRouter()
  const notify = useNotify()

  const { contract_address } = router.query
  const { data: tokens, isFetching, isError } = useCollections(
    contract_address as string,
  )

  if (isFetching) {
    return (
      <FullPageScreen>
        <Box>Loading...</Box>
      </FullPageScreen>
    )
  }

  if (isError) {
    notify('Error fetching this collection')
    return (
      <FullPageScreen>
        <Box>Error</Box>
      </FullPageScreen>
    )
  }

  if (!tokens || tokens.length === 0) {
    return (
      <FullPageScreen>
        <Box>
          <Heading size="md">Not found</Heading>
          <Link href="/">
            <a>Go back to the homepage</a>
          </Link>
        </Box>
      </FullPageScreen>
    )
  }

  return (
    <Layout>
      <Box py="16">
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {tokens?.map((token: TokenType) => (
            <GridItem key={token.tokenId}>
              <Nft token={token} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export default CollectionPage
