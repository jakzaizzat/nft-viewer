import { Box, Button, Flex, Text } from '@chakra-ui/react'
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

type Props = {
  isOpen: boolean
  onClose: () => void
  id: number
}

export default function NftModal({ id, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title #{id}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
          >
            <Image
              src="https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x0ff79f84ad87345f743cad85943f05c774b81271eab552d708b181fb8deebb5f?resource_type=image&f=auto&c=limit&w=768&q=auto:best"
              height={{
                base: 'auto',
                md: '200px',
              }}
              width="auto"
              borderRadius={8}
              mb={4}
            />
            <Box p="4">
              <Heading size="md" color="gray.600">
                Moonbirds #{id}
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
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
