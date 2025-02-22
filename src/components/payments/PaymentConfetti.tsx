'use client'
import Confetti from 'react-confetti'

import { useWindowSize } from '@/hooks/use-window-size'

export function PaymentConfetti() {
  const { width, height } = useWindowSize()
  
  if (width === 0 || height === 0 || !window) return null

  return (
    <Confetti width={width} height={height} recycle={false} numberOfPieces={400} gravity={0.10} tweenDuration={8000} opacity={0.35} />
  )
}
