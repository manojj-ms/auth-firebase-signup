import React from 'react';
import { Row, Col, Card, Input, Button, Checkbox, Form } from 'antd';
import Icon from "@ant-design/icons";
import Link from 'next/link';


const login = () => {
  const handleSubmit = (values: any) => {
    console.log('Received values of form: ', values);
  }
  return (
    <div className="px-80 py-52">
      <Form onFinish={handleSubmit}>

      <Row gutter={16}>
        <Col>
          <Card
            title="Dealer Management System -Login"
            style={{ width: 400 }}
          >
               <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Row className="inputContainers">
              <Input
                className="allinputs"
                placeholder="Email Address"
                required
                prefix={
                  <Icon
                    type="user"
                    style={{ color: "rgba(0,0,0,.25)" }}
                    className="iconMarginCorrection"
                  />
                }

              />
            </Row>
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Row className="inputContainers">
              <Input
                className="allinputs"
                placeholder="Password"
                prefix={
                  <Icon
                    type="user"
                    style={{ color: "rgba(0,0,0,.25)" }}
                    className="iconMarginCorrection"
                  />
                }

              />
            </Row>
            </Form.Item>
            <Row className="inputContainers">
              <Col>
                <Button
                  type="primary"
                  className="submit-button"
                >
                  Login
                  </Button>
              </Col>
              <Col>
                <Link href="login">
                  <Button

                    className="submit-button">
                    Forgotpassword
                    </Button>
                </Link>
              </Col>
              <Col>
                <a href="register"> Create account?</a>
                </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      </Form>
    </div>
  )
}
export default (login)