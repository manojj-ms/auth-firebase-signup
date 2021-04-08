import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import App from 'next/app'

import DashboardLayout from '../layout/dashboard';
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
      <Component {...pageProps}></Component>
    )

  }
}
export default MyApp
