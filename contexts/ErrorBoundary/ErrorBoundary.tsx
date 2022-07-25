import { Box, Heading } from '@chakra-ui/react'
import FullPageScreen from '../../components/FullPageScreen'
import Catch from './functional-error-boundary'

type Props = {
  children: React.ReactNode
}

const MyErrorBoundary = Catch(function MyErrorBoundary(
  { children }: Props,
  error?: Error,
) {
  if (error) {
    return (
      <FullPageScreen>
        <Box>
          <Heading>An error has occured</Heading>
          <Heading>{error.message}</Heading>
        </Box>
      </FullPageScreen>
    )
  } else {
    return <>{children}</>
  }
})

export default MyErrorBoundary
