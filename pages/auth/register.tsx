import React from 'react';
import { Row,Col,Card,Input, Button, Checkbox } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import {useState} from 'react'
import firebase from '../utils/firebase-config';
 

const register =() =>{
  
console.log(firebase.name);
console.log(firebase.database());
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
               prefix={
                    <Icon
                      type="user"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
                  
                />
              </Row>
              <Row className="inputContainers">
                <Input.Password
                  className="allinputs"
                  placeholder="Password"
            prefix={
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
               
                />
              </Row>
              <Row className="inputContainers">
                <Input.Password
                  className="allinputs"
                  placeholder="Confirm Password"
                 
                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                      className="iconMarginCorrection"
                    />
                  }
            
                />
              </Row>
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
    
export default (register)  