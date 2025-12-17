import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User } from 'lucide-react'
import React from 'react'

const SignUp = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50  px-4'>
        <div className='w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-lg'>

            <div className="px-6 pt-6 pb-4 text-center">
                <h1 className='text-2xl text-gray-900'>Sign up for an account</h1>
                <p className='mt-1 text-sm text-gray-500'>
                    Enter Your details to create your account
                </p>
                
            </div>
            <form className='px-6 pb-6 space-y-5'>

<div className='space-y-2'>
<Label htmlFor='text'>Name</Label>
<div className='relative'>
    <Input id="name" type='text' placeholder='karan1_2' className='h-11'/>
<span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'><User/></span>
</div>
</div>
            </form>
    <div className="flex justify-center mb-4">
        <p>Already have an account? <a href="/sign-in" className="text-blue-600 hover:underline dark:text-blue-500">Sign in</a></p>
    </div>
        </div>
    </div>
  )
}

export default SignUp