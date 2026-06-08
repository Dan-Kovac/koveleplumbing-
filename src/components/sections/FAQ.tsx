import { cn } from '@/lib/utils'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQProps {
  title: string
  subtitle?: string
  faqs: { question: string; answer: string }[]
  className?: string
}

export function FAQ({ title, subtitle, faqs, className }: FAQProps) {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)}>
      <Container className="max-w-3xl">
        <ScrollReveal>
          <RevealItem className="text-center">
            <h2 className="font-heading text-3xl font-bold text-text-heading md:text-4xl">
              {title}
            </h2>
            {subtitle && <p className="mt-4 text-lg text-text-muted">{subtitle}</p>}
          </RevealItem>

          <RevealItem className="mt-12">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealItem>
        </ScrollReveal>
      </Container>
    </section>
  )
}
