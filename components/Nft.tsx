import {
  Box,
  Heading,
  Image,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

type Props = {
  id: number
}

export default function Nft({ id }: Props) {

  const router = useRouter()

  const handleClick = () => {
    router.replace({
      query: { ...router.query, id: id.toString() },
    })
  }
  return (
    <>
      <Box onClick={handleClick}>
        <Image
          src="https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x0ff79f84ad87345f743cad85943f05c774b81271eab552d708b181fb8deebb5f?resource_type=image&f=auto&c=limit&w=768&q=auto:best"
          height="auto"
          width="100%"
          borderRadius={8}
          mb={4}
        />
        <Heading size="md" color="gray.600">
          {id}
        </Heading>
      </Box>
      {/* <NftModal id={id} isOpen={isOpen} onClose={onClose} /> */}
    </>
  )
}
