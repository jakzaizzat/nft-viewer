import { Box, Grid, Text } from '@chakra-ui/react'
import { AttributeType } from '../../types'

type Props = {
  attributes: AttributeType[]
}

export default function AttributesList({ attributes }: Props) {
  return (
    <Grid
      gap={2}
      flexWrap="wrap"
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
      }}
    >
      {attributes.map((attribute: AttributeType) => (
        <Box
          key={attribute.id}
          p={2}
          flexDirection="column"
          alignItems="start"
          gap={1}
          backgroundColor="gray.100"
          borderRadius={4}
          maxWidth="100%"
        >
          <Text display="block" color="gray.500" fontSize="sm">
            {attribute.traitType}
          </Text>
          <Text fontSize="sm">{attribute.value}</Text>
        </Box>
      ))}
    </Grid>
  )
}
