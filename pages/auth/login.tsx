import React from 'react';
import { Row,Col,Card,Input, Button, Checkbox } from 'antd';
import Icon from "@ant-design/icons";
import  Link  from 'next/link';

 
  const login = () =>
{   
  return (
  <div className="px-80 py-52">
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
                <Link href= "login">
                  <Button
                
                    className="submit-button">
                     Forgotpassword
                    </Button>
                    </Link>
                   </Col>
                   <Row>
                      <a href="register"> Create account?</a>
                   </Row>
              </Row>
            </Card>
          </Col>
        </Row>
  </div>
      )
    }
export default (login)  