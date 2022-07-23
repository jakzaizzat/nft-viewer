import { Flex, Container, Box } from '@chakra-ui/react'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Box as="main" h="100%" minH="calc(100vh)">
      <Container maxW="4xl" p={4}>
        <Box mb={8}>
          <Header />
        </Box>
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}
