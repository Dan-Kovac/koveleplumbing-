export {}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'emr-simple-slider': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'widget-id': string
      }
    }
  }
}
