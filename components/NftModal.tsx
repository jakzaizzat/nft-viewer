import { Box, Button, Flex, Grid, Tag, Text } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Heading,
} from '@chakra-ui/react'
import useToken from '../hooks/useToken'
import { AttributeType } from '../types'

type Props = {
  isOpen: boolean
  onClose: () => void
  id: string
  collectionAddress: string
}

export default function NftModal({
  id,
  collectionAddress,
  isOpen,
  onClose,
}: Props) {
  const { status, data, error, isFetching } = useToken({
    contractAddress: collectionAddress,
    tokenId: id,
  })

  if (isFetching) {
    return <Box>Loading...</Box>
  }

  const { name, image, description, attributes } = data

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Moonbirds {name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
                md: '200px',
              }}
              width="auto"
              borderRadius={8}
              mb={4}
            />
            <Box
              pl={{
                base: 0,
                md: 4,
              }}
              flex="1"
            >
              <Heading size="md" color="gray.600" mb={4}>
                Moonbirds {name}
              </Heading>
              <Text>{description}</Text>
              <Text
                mb={2}
                color="
                gray.600
              "
              >
                Attributes
              </Text>
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
                  >
                    <Text display="block" color="gray.500" fontSize="sm">
                      {attribute.traitType}
                    </Text>
                    <Text fontSize="sm">{attribute.value}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
