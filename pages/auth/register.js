import React, { useRef, useState, useEffect } from "react"
import { Row, Col, Card, Input, Button, Checkbox, Form } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
      
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
    <>
        <div className="px-80 py-52 ">
      <Form onFinish={(e) => handleSubmit(e)}>
        <Row gutter={16}>
          <Col>
            <Card
              title="Dealer Management System - Register"
              style={{ width: 400 }}
            >
              <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input
                  className="allinputs"
                  type='email'
                  placeholder="Email Address"
                  ref={emailRef}
                  required
                  
                  prefix={
                    <Icon
                      type="user"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }

                />
              </Form.Item>
              
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Row className="inputContainers">
                  <Input.Password
                    className="allinputs"
                    placeholder="Password"
                    type="password"
                    ref={passwordRef}
                    required
                    prefix={
                      <Icon
                        type="lock"
                        style={{ color: "rgba(0,0,0,.25)" }}
                        className="iconMarginCorrection"
                      />
                    }

                  />
                </Row>
              </Form.Item>

            <Form.Item name="confirmpassword" rules={[{ required: true, message: 'Please input your confirm password!' }]}>
                <Row className="inputContainers">
                  <Input.Password
                    className="allinputs"
                    placeholder="Confirm Password"
                    type="password"
                    ref={passwordConfirmRef}
                    required
                    prefix={
                      <Icon
                        type="lock"
                        style={{ color: "rgba(0,0,0,.25)" }}
                        className="iconMarginCorrection"
                      />
                    }

                  />
                </Row>
              </Form.Item>

              <Form.Item>
                <Row className="inputContainers">
                  <Col>
                    <Button
                      type="primary"
                      className="submit-button"
                      htmlType="submit"
                      disabled={loading}
                    >
                      Register
                  </Button>
                  </Col>
                  <Col>

                    <Link href="login">
                      <Button
                        className="submit-button"
                         
                      >
                        Back to login
                    </Button>
                    </Link>
                  </Col>
                </Row>
              </Form.Item>

            </Card>
          </Col>
        </Row>
      </Form>
    </div>
    </>
  )
}
