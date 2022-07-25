import { Box } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

export default function FullPageScreen({ children }: Props) {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}
