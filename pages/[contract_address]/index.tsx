import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Nft from '../../components/Nft'
import NftModal from '../../components/NftModal'

const CollectionPage: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const { query } = router

  useEffect(() => {
    if (query?.id) {
      onOpen()
      return
    }

    onClose()
    // TODO: reset query
  }, [query])

  return (
    <Box w="100vw" minH="100vh" bg="gray.100">
      <Container p={4}>
        <Header />
        <Box py="16">
          <Heading size="md" mb={8}>
            Collection Page
          </Heading>
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={6}
          >
            <GridItem>
              <Nft id={1} />
            </GridItem>
            <GridItem>
              <Nft id={2} />
            </GridItem>
            <GridItem>
              <Nft id={3} />
            </GridItem>
            <GridItem>
              <Nft id={4} />
            </GridItem>
            <GridItem>
              <Nft id={5} />
            </GridItem>
            <GridItem>
              <Nft id={6} />
            </GridItem>
            <GridItem>
              <Nft id={7} />
            </GridItem>
          </Grid>
        </Box>

        <NftModal
          isOpen={isOpen}
          onClose={onClose}
          id={parseInt(query?.id as string)}
        />
      </Container>
    </Box>
  )
}

export default CollectionPage
