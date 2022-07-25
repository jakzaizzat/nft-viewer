import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MyErrorBoundary from './ErrorBoundary/ErrorBoundary'
import RainbowkitContext from './RainbowkitContext'

type Props = {
  children: React.ReactNode
}

export default function AppProvider({ children }: Props) {
  const queryClient = new QueryClient()

  return (
    <MyErrorBoundary>
      <RainbowkitContext>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
      </RainbowkitContext>
    </MyErrorBoundary>
  )
}
