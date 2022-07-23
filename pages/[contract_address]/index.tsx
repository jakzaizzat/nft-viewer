import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import CollectionHeader from '../../components/CollectionHeader'
import Layout from '../../components/Layout'
import Nft from '../../components/Nft'
import useCollections from '../../hooks/useCollections'
import { TokenType } from '../../types'

const CollectionPage: NextPage = () => {
  const { query } = useRouter()
  const { contract_address } = query

  const { data: tokens, isFetching } = useCollections(contract_address as string)

  // TODO: Should replace with collection graphql query
  // const collection = useMemo(() => {
  //   if (!isSuccess) return {}
  //   if ((tokens || []).length < 1) return {}
  //   return tokens[0].collection as CollectionType
  // }, [tokens, isSuccess])

  if (isFetching) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Box py="16">
        {/* {collection && <CollectionHeader collection={collection} />} */}
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
