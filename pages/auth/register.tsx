import React, { useRef, useState, useEffect } from "react"
import { Row, Col, Card, Input, Button, Checkbox, Form } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"
import { useForm } from 'react-hook-form'; 

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
