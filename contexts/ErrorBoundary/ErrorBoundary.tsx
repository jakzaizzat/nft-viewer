import { Box, Heading } from '@chakra-ui/react'
import Catch from './functional-error-boundary'

type Props = {
  children: React.ReactNode
}

const MyErrorBoundary = Catch(function MyErrorBoundary(
  props: Props,
  error?: Error,
) {
  if (error) {
    return (
      <Box
        h="100vh"
        w="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Heading>An error has occured</Heading>
          <Heading>{error.message}</Heading>
        </Box>
      </Box>
    )
  } else {
    return <>{props.children}</>
  }
})

export default MyErrorBoundary
