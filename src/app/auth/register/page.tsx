import React from 'react'
import Layout from '../_components/Layout'
import AuthForm from '../_components/AuthForm';
import Link from 'next/link';

export const metadata = {
  title: 'Register',
  description: 'User registration page',
};

export default function Register() {
  return (
      <Layout>
        <AuthForm 
          type='register'
          link={
            <p>Already have an account? <Link href={"/auth/login"} className='text-orange-600 hover:text-blue-600'>login</Link></p>
          } />
      </Layout>
  )
}
