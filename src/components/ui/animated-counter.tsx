import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

function parseValue(val: string): { prefix: string; number: number; decimals: number; suffix: string; hasCommas: boolean } {
  const match = val.match(/^([^0-9]*)([\d,]+\.?\d*)(.*?)$/)
  if (!match) return { prefix: '', number: 0, decimals: 0, suffix: val, hasCommas: false }

  const prefix = match[1]
  const numStr = match[2].replace(/,/g, '')
  const number = parseFloat(numStr)
  const decimalPart = numStr.includes('.') ? numStr.split('.')[1].length : 0
  const hasCommas = match[2].includes(',')
  const suffix = match[3]

  return { prefix, number, decimals: decimalPart, suffix, hasCommas }
}

function formatNumber(num: number, decimals: number, hasCommas: boolean): string {
  const fixed = num.toFixed(decimals)
  if (!hasCommas) return fixed
  const [whole, dec] = fixed.split('.')
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return dec ? `${withCommas}.${dec}` : withCommas
}

export function AnimatedCounter({ value, className, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(value)
  const { prefix, number, decimals, suffix, hasCommas } = parseValue(value)

  useEffect(() => {
    if (!isInView || number === 0) return

    const startTime = Date.now()
    const durationMs = duration * 1000

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * number
      setDisplay(`${prefix}${formatNumber(current, decimals, hasCommas)}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setDisplay(value)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, number, decimals, hasCommas, prefix, suffix, value, duration])

  return (
    <span ref={ref} className={className}>
      {isInView ? display : `${prefix}0${suffix}`}
    </span>
  )
}
