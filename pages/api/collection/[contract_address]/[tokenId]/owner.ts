import request, { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { BASE_API_URL, LOOKSRARE_HTTP_HEADER } from '../../../../../constant'
import { OwnerType } from '../../../../../types'

type Data = {
  success: boolean
  owners: OwnerType[]
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { contract_address, tokenId } = req.query

  try {
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
          collection: contract_address,
          tokenId: tokenId,
        },
        LOOKSRARE_HTTP_HEADER
      )

    res.status(200).json({
      success: true,
      owners: response.token.owners,
    })
  } catch (error: any) {
    res.status(500).send({
      success: false,
      owners: [],
      message: error?.message || 'An unknown error occurred',
    })
  }
}
