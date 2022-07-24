import { Text } from '@chakra-ui/react'
import { useToken } from 'wagmi'
import { weiToEth } from '../../utils/utils'

type Props = {
  ask: {
    price: string
    currency: string
  }
}

export default function TokenPrice({ ask }: Props) {
  const { data } = useToken({
    address: ask.currency,
  })
  return (
    <Text size="sm" color="gray.500" mb={4}>
      Current Price: {weiToEth(ask.price)} {data?.symbol}
    </Text>
  )
}
