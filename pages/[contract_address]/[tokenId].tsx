import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  Button,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Layout from '../../components/Layout'
import AttributesList from '../../components/Token/AttributesList'
import TokenCollection from '../../components/Token/TokenCollection'
import TokenOwnerSection from '../../components/Token/TokenOwnerSection'
import TokenPrice from '../../components/Token/TokenPrice'
import useNotify from '../../hooks/useNotify'
import useToken from '../../hooks/useToken'
import useTokenOwner from '../../hooks/useTokenOwner'
import { TokenType } from '../../types'

export default function NftDetailPage() {
  const router = useRouter()
  const { tokenId, contract_address } = router.query
  const notify = useNotify()

  const { data: token, isError, isFetching, isSuccess } = useToken({
    contractAddress: contract_address as string,
    tokenId: tokenId as string,
  })

  const { data: owners } = useTokenOwner({
    contractAddress: contract_address as string,
    tokenId: tokenId as string,
  })

  const currentOwner = useMemo(() => {
    if (!owners) return null
    // TODO: Should handle NFT with multiple owners
    return owners[0].owner
  }, [owners])

  if (isFetching) {
    return <Box>Loading...</Box>
  }

  if (isError || !token) {
    notify('Error fetching this token')
    return <div>Error</div>
  }
 
  const { image, name, description, attributes, ask, collection } = token || {}

  return (
    <Layout>
      <Breadcrumb mb={4}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href={`/${contract_address}`}>
            {collection?.name || 'Collection'}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{tokenId}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="center">
        <Box display="grid" gap={4} w="full">
          <Flex
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            {/* TODO: Support other media too */}
            <Image
              src={image?.src}
              height={{
                base: 'auto',
                md: '300px',
              }}
              width="auto"
              maxWidth="100%"
              borderRadius={8}
              mb={4}
            />

            <Box
              pl={{
                base: 0,
                md: 4,
              }}
              flex="1"
              gap={4}
            >
              <Heading size="xl" color="gray.600" mb={4}>
                {name}
              </Heading>
              <Text mb={4}>{description}</Text>
              {ask && <TokenPrice ask={ask} />}
              <Button
                as="a"
                href={`https://looksrare.org/collections/${contract_address}/${tokenId}`}
                target="_blank"
                size="md"
                bg="green.500"
                color="white"
                mb={4}
                _hover={{
                  bg: 'green.600',
                }}
              >
                {ask ? 'Buy' : 'View'} on LooksRare
              </Button>
              <Grid gap={4}>
                <TokenOwnerSection address={currentOwner?.address} />
                <TokenCollection collection={collection} />
              </Grid>
            </Box>
          </Flex>

          <Box>
            <Text
              mb={2}
              size="sm"
              color="
                gray.500
              "
            >
              Attributes
            </Text>
            <AttributesList attributes={attributes} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}
