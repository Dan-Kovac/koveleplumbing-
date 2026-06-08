import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientOrbProps {
  className?: string
  color?: 'primary' | 'accent' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

const sizeMap = {
  sm: 'h-32 w-32',
  md: 'h-64 w-64',
  lg: 'h-96 w-96',
  xl: 'h-[500px] w-[500px]',
}

export function GradientOrb({ className, color = 'primary', size = 'lg', animate = true }: GradientOrbProps) {
  const baseClasses = cn(
    'pointer-events-none absolute rounded-full opacity-30 blur-3xl',
    sizeMap[size],
    className
  )

  const bg = color === 'primary'
    ? 'var(--color-gradient-from)'
    : color === 'accent'
    ? 'var(--color-gradient-to)'
    : 'var(--color-gradient-via)'

  if (animate) {
    return (
      <motion.div
        className={baseClasses}
        style={{ background: bg }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    )
  }

  return <div className={baseClasses} style={{ background: bg }} />
}
