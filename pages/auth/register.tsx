import { Row,Col,Card,Input, Button, Checkbox } from 'antd';
import Icon from "@ant-design/icons";
import Link from "next/link"
import React, {useState, useEffect} from 'react'
import firebase from '../utils/firebase-config';

const register =() =>{
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccont] = useState(false);

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
 
  const handleSignup = () => {
    clearErrors();
     firebase
     .auth()
     .createUserWithEmailAndPassword(email,password)
     .catch((err) => {
       switch (err.code){
         case "auth/invalid-email":
         case "auth/user-disabled":
         case "auth/user-not-found":
            setEmailError(err.message);
            break;
         case "auth/user-not-found":
            setEmailError(err.message);
            break;
       }
       
     });
  }

  const authListener = () => {
      firebase.auth().onAuthStateChanged(user => {
        clearInputs();
        if(user){
          setUser(user);
        }
        else{
          setUser(""); 
        }
      });
  };

  useEffect(()=>{
    authListener();
  },[]);

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
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
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
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
                    onClick={handleSignup}
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

function newFunction(setUser: React.Dispatch<React.SetStateAction<string>>, user) {
  setUser(user);
}
