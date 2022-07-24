import { useQuery } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'

const BASE_API_URL = 'https://graphql.looksrare.org/graphql'

type Props = {
  contractAddress: string
  tokenId: string
}

export default function useToken({ contractAddress, tokenId }: Props) {

  return useQuery(
    ['token', { contractAddress, tokenId }],
    async () => {
      const { token } = await request(
        BASE_API_URL,
        gql`
          query GetToken($collection: Address!, $tokenId: String!) {
            token(collection: $collection, tokenId: $tokenId) {
              tokenId
              name
              description
              image {
                src
              }
              attributes {
                id
                traitType
                value
              }
              ask {
                currency
                price
              }
              collection {
                name
                address
                type
                logo {
                  src
                  contentType
                }
                totalSupply
                description
              }
            }
          }
        `,
        {
          collection: contractAddress,
          tokenId: tokenId,
        },
      )

      return token
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  )
}
