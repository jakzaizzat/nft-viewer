import { useQuery } from '@tanstack/react-query'

type Props = {
  contractAddress: string
  tokenId: string
}

export default function useToken({ contractAddress, tokenId }: Props) {
  return useQuery(
    ['token', { contractAddress, tokenId }],
    async () => {
      const response = await fetch(
        `/api/collection/${contractAddress}/${tokenId}`,
      ).then((res) => res.json())

      return response
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  )
}
