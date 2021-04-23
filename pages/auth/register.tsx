import React, { useRef, useState, useEffect } from "react"
import { Row, Col, Card, Input, Button, Checkbox, Form } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"
import { useForm } from 'react-hook-form'; 
import router, { useRouter } from 'next/router';
export default function Signup() {
  const [form] = Form.useForm();
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { register,handleSubmit} = useForm();
  async function handleSubmition() {
      
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      router.push('/dashboard/products');
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (


    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Dealer Management System - Register</h1>
                        {error && <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p>{error}</p>
</div>}
                        <form onSubmit={handleSubmit(handleSubmition)}>
                        <input 
                            type="email"
                            ref={emailRef}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
                        
                        <input 
                            type="password"
                            ref={passwordRef}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            type="password"
                            ref={passwordConfirmRef}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />
    
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-800 focus:outline-none my-1"
                        >Create Account</button>
    
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                        </form>
                    </div>
                    
                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <a className="no-underline border-b border-blue text-blue" href="login">
                            Log in
                        </a>.
                    </div>
                </div>
            </div>
  )
}
