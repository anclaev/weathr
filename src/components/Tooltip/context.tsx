import { createContext, useContext, useState } from 'react'

import { ITooltipContext, ITooltipState } from '../../types/components'

import Tooltip from './'

const initialState: ITooltipState = {
  title: '',
  status: false,
  x: 0,
  y: 0,
}

const TooltipContext = createContext<ITooltipContext>({
  state: initialState,
  setState: () => {},
})

export const useTooltip = () => {
  const context = useContext(TooltipContext)

  if (context === undefined) {
    throw new Error('Контекст вызывается вне провайдера.')
  }

  return context
}

const TooltipProvider: React.FC = ({ children }) => {
  const [tooltipState, setTooltipState] = useState<ITooltipState>(initialState)

  return (
    <TooltipContext.Provider
      value={{ state: tooltipState, setState: setTooltipState }}
    >
      {children}
      <Tooltip />
    </TooltipContext.Provider>
  )
}

export default TooltipProvider
