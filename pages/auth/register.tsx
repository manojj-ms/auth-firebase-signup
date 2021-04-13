import React from 'react';
import { Row,Col,Card,Input, Button, Checkbox } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import {useState} from 'react'

 
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
      event.preventDefault();
      setEmail("");
      setPassword("");
     
    };
    const onChangeHandler = event => {
      const { name, value } = event.currentTarget;
      if (name === "userEmail") {
        setEmail(value);
      } else if (name === "userPassword") {
        setPassword(value);
      }
    };  

    

  return (
  <div className="px-80 py-52 ">
     <Row gutter={16}>
          <Col>
            <Card
              title="Dealer Management System -Register"
              style={{ width: 400 }}
            >
              <Row className="inputContainers">
                <Input
                  className="allinputs"
                  type='text'
                  
                  placeholder="Email Address"
                  id="userEmail"
                  prefix={
                    <Icon
                      type="user"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
                  onChange={event => onChangeHandler(event)}
                />
              </Row>
              <Row className="inputContainers">
                <Input.Password
                  className="allinputs"
                  placeholder="Password"
                
                  id="userPassword"

                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
                  onChange={event => onChangeHandler(event)}
                />
              </Row>
              <Row className="inputContainers">
                <Input.Password
                  className="allinputs"
                  placeholder="Confirm Password"
                  id="userPassword"
                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
                  onChange={event => onChangeHandler(event)}
                />
              </Row>
              <Row className="inputContainers">
                <Col>
                  <Button
                    type="primary"
                    className="submit-button"
                    onClick={event => {
                        createUserWithEmailAndPasswordHandler(event, email, password);
                      }}
                    >
                   Register
                  </Button>
                </Col>
                <Col>
                <Link href ="login">
                  <Button
                    className="submit-button"
                  
                    >
                      Back to login 
                    </Button>
                    </Link>
                   </Col>
              </Row>
            </Card>
          </Col>
        </Row>
  </div>
      )
    }
    
export default (Register)  