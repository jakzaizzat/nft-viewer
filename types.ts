export type AttributeType = {
  id: string
  traitType: string
  value: string
}

export type CollectionType = {
  address: string
  name: string
  description?: string
  totalSupply: string
  logo: {
    src: string
  }
}

export type OwnerType = {
  balance: string
  owner: {
    address: string
  }
}

export type TokenType = {
  tokenId: string
  name: string
  description?: string
  image: {
    src: string
    contentType: string
  }
  ask: {
    price: string
    currency: string
  }
  attributes: AttributeType[]
  collection: CollectionType
}
