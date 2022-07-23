export type AttributeType = {
  id: string
  traitType: string
  value: string
}

export type CollectionType = {
  address: string
  name: string
  totalSupply: string
}

export type TokenType = {
  tokenId: string
  name: string
  image: {
    src: string
    contentType: string
  }
  attributes: AttributeType[]
  collection: CollectionType
}
