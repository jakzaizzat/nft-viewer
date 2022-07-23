import {
  Flex,
  Heading,
  Grid,
  Image,
  Box,
  Text,
  Container,
  Button,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import AttributesList from '../../components/Token/AttributesList'
import useToken from '../../hooks/useToken'

export default function NftDetailPage() {
  const { query } = useRouter()
  const { tokenId, contract_address } = query

  const { status, data, error, isFetching } = useToken({
    contractAddress: contract_address as string,
    tokenId: tokenId as string,
  })

  if (isFetching) {
    return <Box>Loading...</Box>
  }

  const { image, name, description, attributes, ask, collection } = data

  return (
    <Layout>
      <Flex>
        <Box display="grid" gap={4}>
          <Flex
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
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
                Moonbirds {name}
              </Heading>
              <Text>{description}</Text>

              <Text size="sm" color="gray.500" mb={4}>
                Current Price: {ask.price} {ask.currency}
              </Text>
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
                Buy on LooksRare
              </Button>

              <Flex
                bg="gray.50"
                alignItems="center"
                p={4}
                borderRadius={4}
                gap={4}
              >
                <Image
                  src={collection.logo.src}
                  height="40px"
                  width="40px"
                  borderRadius="full"
                />
                <Box>
                  <Text fontWeight="semibold">{collection.name}</Text>
                  <Text color="gray.600">
                    {collection.description} asdasdasdasd
                  </Text>
                  <Text>
                    <Text fontWeight="semibold" display="inline-block">
                      {collection.totalSupply}
                    </Text>{' '}
                    items
                  </Text>
                </Box>
              </Flex>
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
