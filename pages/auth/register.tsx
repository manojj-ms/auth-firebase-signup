import { Row, Col, Card, Input, Button, Checkbox, Form } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import React, { useState, useEffect, useRef } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import firebase from '../utils/firebase-config';
import { useAuth } from '../contexts/AuthContext';
const register = (props: any) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


  const handleSignUp = () => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then()
  }

  const handleEmail = (event: any) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const handleConfirmPassword = (event: any) => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = (values: any) => {
    console.log('Received values of form: ', values);
  }

  return (

    <div className="px-80 py-52 ">
      <Form onFinish={handleSubmit}>
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
                  onChange={handleEmail}
                  value={email}
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
                    onChange={handlePassword}
                    value={password}
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
                    onChange={handleConfirmPassword}
                    value={confirmpassword}
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
  )
}

export default (register)
