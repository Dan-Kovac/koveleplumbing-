import { cn } from '@/lib/utils'

export function GradientText({
  children,
  className,
  as: Tag = 'span',
}: {
  children: React.ReactNode
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}) {
  return (
    <Tag className={cn('text-gradient', className)}>
      {children}
    </Tag>
  )
}
