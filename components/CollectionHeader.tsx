import { Box, Heading, Text } from '@chakra-ui/react'
import { CollectionType } from '../types'

type Props = {
  collection: CollectionType
}

export default function CollectionHeader({ collection }: Props) {
  return (
    <Box>
      <Heading size="md" mb={8}>
        {collection.name}
      </Heading>
      <Text>{collection.totalSupply}</Text>
      <Text>{collection.address}</Text>
    </Box>
  )
}
