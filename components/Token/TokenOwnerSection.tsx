import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ellipseAddress } from '../../utils/utils'
import { useAccount, useEnsName } from 'wagmi'
import { useMemo } from 'react'

type Props = {
  address: string
}

export default function TokenOwnerSection({ address }: Props) {
  const { address: connectedAddress } = useAccount()

  const { data: ensData } = useEnsName({
    address,
  })

  const etherscanUrl = `https://etherscan.io/address/${address}`

  const isOwnerToken = useMemo(() => {
    if (!connectedAddress) return false
    return connectedAddress === address
  }, [connectedAddress, address])

  const ownerEnsName = useMemo(() => {
    if (!ensData) return ellipseAddress(address)
    return ensData
  }, [ensData, address])

  return (
    <Flex
      bg="gray.50"
      border="1px"
      borderColor="gray.100"
      alignItems="center"
      p={4}
      borderRadius={4}
      gap={4}
    >
      <Box>
        <Text fontWeight="semibold">Owner</Text>
        <Link href={etherscanUrl}>
          <a target="_blank">
            <Text
              as="span"
              fontWeight="semibold"
              color={isOwnerToken ? 'green.500' : 'gray.500'}
              cursor="pointer"
              _hover={{
                color: 'gray.700',
              }}
            >
              {isOwnerToken ? 'You' : ownerEnsName}
            </Text>
          </a>
        </Link>
      </Box>
    </Flex>
  )
}
