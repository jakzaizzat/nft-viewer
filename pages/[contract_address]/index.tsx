import { Box, Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Nft from '../../components/Nft'
import useCollections from '../../hooks/useCollections'
import useNotify from '../../hooks/useNotify'
import { TokenType } from '../../types'

const CollectionPage: NextPage = () => {
  const router = useRouter()
  const notify = useNotify()

  const { contract_address } = router.query
  const { data, isFetching, isError } = useCollections(
    contract_address as string,
  )

  if (isFetching) {
    return <div>Loading...</div>
  }

  const { tokens }  = data || {}

  if (isError) {
    notify('Error fetching this collection')
    return <div>Error</div>
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
