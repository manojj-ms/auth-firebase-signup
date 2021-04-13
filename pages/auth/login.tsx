import React from 'react';
import { Row,Col,Card,Input, Button, Checkbox } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import {useState} from 'react'
 
  const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = 
          (event,email, password) => {
              event.preventDefault();
  };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
          setPassword(value);
        }
    };


return (
  <div className="px-80 py-52 ">
     <Row gutter={16}>
          <Col>
            <Card
              title="Dealer Management System -Login"
              style={{ width: 400 }}
            >
              <Row className="inputContainers">
                <Input
                  className="allinputs"
                  placeholder="Email Address"
                  value={email}

                  prefix={
                    <Icon
                      type="user"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
                  onChange = {(event) => onChangeHandler(event)}
                />
              </Row>
              <Row className="inputContainers">
                <Input.Password
                  className="allinputs"
                  value={password}
                  placeholder="Password"
           

                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
                  onChange = {(event) => onChangeHandler(event)}
                />
              </Row>
              <Row className="inputContainers">
                <Col>
                <Link href="dashboard/prdocuts">
                  <Button
                    type="primary"
                    className="submit-button"
                   >
                    Login
                  </Button>
                  </Link>
                </Col>
                <Col>
                <Link href ="forgotpassword">
                  <Button
                    className="submit-button"
                  
                    >
                      Forgot Password
                    </Button>
                    </Link>
                   </Col>
                   <Row>
                    <Link href='register'>
                      Create new account
                      ? 
                    </Link>
                   </Row>
              </Row>
            </Card>
          </Col>
        </Row>
  </div>
      )
    }

export default (login)  