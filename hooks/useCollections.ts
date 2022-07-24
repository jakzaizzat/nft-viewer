import { useQuery } from '@tanstack/react-query'

export default function useCollections(contractAddress: string) {
  return useQuery(
    ['collections', { contractAddress }],
    async () => {
      const response = await fetch(
        `/api/collection/${contractAddress}`,
      ).then((res) => res.json())

      return response
    },
    {
      enabled: !!contractAddress,
    },
  )
}
