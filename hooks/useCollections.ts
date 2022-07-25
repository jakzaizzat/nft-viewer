import { useQuery } from '@tanstack/react-query'

export default function useCollections(contractAddress: string) {
  return useQuery(
    ['collections', { contractAddress }],
    async () => {
      const { tokens } = await fetch(
        `/api/collection/${contractAddress}`,
      ).then((res) => res.json())

      return tokens
    },
    {
      enabled: !!contractAddress,
      useErrorBoundary: true,
    },
  )
}
