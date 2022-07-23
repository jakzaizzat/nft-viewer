import { Box, Heading, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TokenType } from '../types'

type Props = {
  token: TokenType
}

export default function Nft({ token }: Props) {
  const router = useRouter()

  const { tokenId, image, name } = token

  return (
    <Link
      href={{
        pathname: '/[contract_address]/[tokenId]',
        query: { contract_address: token.collection.address, tokenId },
      }}
    >
      <Box
        cursor="pointer"
        _hover={{
          opacity: 0.8,
          transition: 'opacity 0.2s ease-in-out',
        }}
      >
        <Image
          src={image.src}
          height="auto"
          width="100%"
          borderRadius={8}
          mb={4}
        />
        <Heading size="md" color="gray.600">
          {name}
        </Heading>
      </Box>
    </Link>
  )
}
