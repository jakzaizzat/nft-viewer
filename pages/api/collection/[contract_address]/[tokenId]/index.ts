import request, { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { BASE_API_URL, LOOKSRARE_HTTP_HEADER } from '../../../../../constant'
import { TokenType } from '../../../../../types'

type Data = {
  success: boolean
  token: TokenType | null
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { contract_address, tokenId } = req.query

  try {
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
        collection: contract_address,
        tokenId: tokenId,
      },
      LOOKSRARE_HTTP_HEADER,
    )

    res.status(200).json({
      success: true,
      token,
    })
  } catch (error: any) {
    res.status(500).send({
      success: false,
      token: null,
      message: error?.message || 'An unknown error occurred',
    })
  }
}
