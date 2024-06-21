import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='bg-dark-2 flex h-screen w-full items-center justify-center'>
        <SignIn/>
    </main>
  )
}

export default SignInPage