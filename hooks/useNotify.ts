import { useToast } from '@chakra-ui/react'

export default function useNotify() {
  const toast = useToast()
  const id = 'toast-container'

  const message = (message: string) => {
    if (!toast.isActive(id)) {
      toast({
        id,
        title: 'Ops',
        description: message,
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return message
}
