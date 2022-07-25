import { memo, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

type Props = {
  children: React.ReactNode
}

const Boundary = memo(({ children }: Props) => (
  <Suspense fallback={<div>Loading asdasdasd...</div>}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
))

export default Boundary