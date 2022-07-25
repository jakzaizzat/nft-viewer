import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import FullPageScreen from '../../components/FullPageScreen'
import Catch from './functional-error-boundary'

type Props = {
  children: React.ReactNode
}

const ErrorBoundary = Catch(function ErrorBoundary(
  { children }: Props,
  error?: Error,
) {
  if (error) {
    return (
      <FullPageScreen>
        <Box fontFamily="sans-serif">
          <Heading>An error has occured</Heading>
          <Text>{error.message}</Text>
          <Link href="/">
            <a>Go back to the homepage</a>
          </Link>
        </Box>
      </FullPageScreen>
    )
  } else {
    return <>{children}</>
  }
})

export default ErrorBoundary
