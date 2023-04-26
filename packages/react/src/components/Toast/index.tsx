import { ComponentProps } from 'react'
import { Box } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'
import { ToastContainer, toast } from 'react-toastify'
import { colors } from '@ignite-ui/tokens'
import 'react-toastify/dist/ReactToastify.css'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast() {
  const showToast = () =>
    toast('Toast Example', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    })

  return (
    <Box>
      <Button onClick={showToast}>
        <Text size="sm">Click Here</Text>
      </Button>
      <ToastContainer
        toastStyle={{
          backgroundColor: colors.gray600,
          borderStyle: 'solid',
          borderColor: colors.gray700,
        }}
      />
    </Box>
  )
}

Toast.displayName = 'Toast'
