import { Box } from '../Box'
import TooltipMui from '@mui/material/Tooltip'
import { Text } from '../Text'
import { ComponentProps } from 'react'
import { colors } from '@ignite-ui/tokens'

export interface TooltipProps extends ComponentProps<typeof TooltipMui> {}

export function Tooltip({ ...props }: TooltipProps) {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TooltipMui {...props}>
        <Text
          size="sm"
          style={{
            backgroundColor: colors.gray800,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Hover on text
        </Text>
      </TooltipMui>
    </Box>
  )
}

Tooltip.displayName = 'Tooltip'
