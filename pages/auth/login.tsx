import React from 'react';
import { Row,Col,Card,Input, Button, Checkbox } from 'antd';
import Icon from "@ant-design/icons";


 
  const login = () =>
{   
  return (
  <div className="px-80 py-52 ">
     <Row gutter={16}>
          <Col>
            <Card
              title="Dealer Management System -Login"
              className=""
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
                <Col>
                  <Button
                    type="primary"
                    className="submit-button"
                    >
                    Login
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="submit-button"
        
                    >
                      Forgot Password
                    </Button>
                   </Col>
              </Row>
            </Card>
          </Col>
        </Row>
  </div>
      )
    }
export default (login)  