'use client'
// this is used to simulate an error in the production environment to check global error handling
import '@/styles/globals.css'
import '@/styles/customGlobal.css'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface Props {
  children: React.ReactNode
}

const ErrorSimulator = ({
  message = 'This is a simulated error',
}: {
  message?: string
}) => {
  const [error, setError] = useState(false)
  if (error) throw new Error(message)

  return <Button onClick={() => setError(true)}>Simulate Error</Button>
}

const ErrorWrapper = ({ children }: Props) => {
  return (
    <div>
      {children}
      <ErrorSimulator />
    </div>
  )
}

export default ErrorWrapper
