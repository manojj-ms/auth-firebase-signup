import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import App from 'next/app'

import DashboardLayout from '../layout/dashboard';
import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    if (router.pathname.startsWith('/dashboard')) {
      return (
        <DashboardLayout> 
          <Component {...pageProps}></Component>
        </DashboardLayout>
      )
    }

    return (
      <AuthProvider>
      <Component {...pageProps}></Component></AuthProvider>
    )
  
  }
}
export default MyApp
