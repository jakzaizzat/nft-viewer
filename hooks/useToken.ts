import { useQuery } from '@tanstack/react-query'
import { TokenType } from '../types'

type Props = {
  contractAddress: string
  tokenId: string
}

export default function useToken({ contractAddress, tokenId }: Props) {
  return useQuery<TokenType>(
    ['token', { contractAddress, tokenId }],
    async () => {
      const { token } = await fetch(
        `/api/collection/${contractAddress}/${tokenId}`,
      ).then((res) => res.json())

      return token
    },
    {
      enabled: !!tokenId,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  )
}
