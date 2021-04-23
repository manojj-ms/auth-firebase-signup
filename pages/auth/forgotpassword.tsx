import React, { useRef, useState } from "react"
import { Row, Col, Card, Input, Button, Checkbox, Form } from 'antd';
import Icon from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext"
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { useForm } from 'react-hook-form'; 


export default function forgotpassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const { register,handleSubmit} = useForm();

  async function handleSubmition() {

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
    }

  return (
    <div>
       
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
        <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Dealer Management System</h1>
                <p className="text-gray-500 dark:text-gray-400">Reset Password to access your account</p>
             </div>
            <div className="pt-8"> 
            {error && <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p>{error}</p>
            </div>}
            <div className="pt-6"> 
            {message && <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p>{message}</p>
            </div>}
            <div className="m-7">
                <form onSubmit={handleSubmit(handleSubmition)}>
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400">Email</label>
                        </div>
                        <input type="email" name="email" id="email" ref={emailRef} placeholder="Your Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <button type="submit" disabled={loading} className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Submit</button>
                    </div>
                
                </form>
            </div>
        </div>
    </div>
</div>
</div>
</div></div>
  )
}
