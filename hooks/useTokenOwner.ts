import { useQuery } from '@tanstack/react-query'

type Props = {
  contractAddress: string
  tokenId: string
}

export default function useTokenOwner({ contractAddress, tokenId }: Props) {
  return useQuery(
    ['tokenOwner', { contractAddress, tokenId }],
    async () => {
      const response = await fetch(
        `/api/collection/${contractAddress}/${tokenId}/owner`,
      ).then((res) => res.json())

      return response.owners
    },
    {
      enabled: !!tokenId,
    },
  )
}
