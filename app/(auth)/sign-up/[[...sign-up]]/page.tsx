import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
    return (
      <main className='bg-dark-2 flex h-screen w-full items-center justify-center'>
          <SignUp/>
      </main>
    )
  }
  
  export default SignUpPage