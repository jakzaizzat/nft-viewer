import { useQuery } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import { BASE_API_URL } from '../constant'


export default function useCollections(contractAddress: string) {
  return useQuery(['collections', { contractAddress }], async () => {
    const { tokens } = await request(
      BASE_API_URL,
      gql`
        query GetTokens($filter: TokenFilterInput!, $sort: TokenSortInput) {
          tokens(filter: $filter, sort: $sort) {
            tokenId
            name
            image {
              src
              contentType
            }
            collection {
              address
              name
              totalSupply
            }
          }
        }
      `,
      {
        filter: {
          collection: contractAddress,
        },
        sort: 'PRICE_ASC',
      },
    )

    return tokens
  }, {
    enabled: !!contractAddress ,
  })
}
