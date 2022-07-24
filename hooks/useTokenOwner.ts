import { useQuery } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import { BASE_API_URL } from '../constant'

type Props = {
  contractAddress: string
  tokenId: string
}

export default function useTokenOwner({ contractAddress, tokenId }: Props) {

  return useQuery(
    ['tokenOwner', { contractAddress, tokenId }],
    async () => {
      const response = await request(
        BASE_API_URL,
        gql`
          query GetTokenOwners(
            $collection: Address!
            $tokenId: String!
            $ownerFilter: TokenOwnerInput
          ) {
            token(collection: $collection, tokenId: $tokenId) {
              owners(filter: $ownerFilter) {
                owner {
                  address
                  name
                }
                balance
              }
            }
          }
        `,
        {
          collection: contractAddress,
          tokenId: tokenId,
        },
      )


      return response.token.owners
    }
  )
}
