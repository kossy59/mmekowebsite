import React from 'react'
import Layout from '../_components/Layout'
import AuthForm from '../_components/AuthForm'
import Link from 'next/link'

export const metadata = {
  title: 'Login',
  description: 'User login page',
};

export default function Login() {
  return <Layout>
    <AuthForm 
        type='login'
        link={
            <p>Don't have an account? <Link href={"/auth/register"} className='text-orange-600 hover:text-blue-600'>register here</Link></p>
          } />
  </Layout>
}
