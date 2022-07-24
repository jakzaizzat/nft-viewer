import request, { gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { BASE_API_URL, LOOKSRARE_HTTP_HEADER } from '../../../../constant'
import { TokenType } from '../../../../types'

type Data = {
  success: boolean
  tokens: TokenType[]
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { contract_address } = req.query

  try {
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
          collection: contract_address,
        },
        sort: 'PRICE_ASC',
      },
      LOOKSRARE_HTTP_HEADER
    )

    res.status(200).json({
      success: true,
      tokens,
    })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({
      success: false,
      tokens: [],
      message: error?.message || 'An unknown error occurred',
    })
  }
}
