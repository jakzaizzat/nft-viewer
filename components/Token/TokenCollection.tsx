import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { CollectionType } from '../../types'

type Props = {
  collection: CollectionType
}

export default function TokenCollection({ collection }: Props) {
  return (
    <Flex
      bg="gray.50"
      border="1px"
      borderColor="gray.100"
      alignItems="center"
      p={4}
      borderRadius={4}
      gap={4}
    >
      <Image
        src={collection.logo.src}
        height="50px"
        width="50px"
        borderRadius="full"
      />
      <Box>
        <Text fontWeight="semibold">{collection.name}</Text>
        <Text color="gray.600" noOfLines={2}>
          {collection.description}
        </Text>
        <Text>
          <Text as="span" fontWeight="semibold" display="inline-block">
            {collection.totalSupply}
          </Text>{' '}
          items
        </Text>
      </Box>
    </Flex>
  )
}
