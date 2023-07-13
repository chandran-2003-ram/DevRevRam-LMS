
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
// import { Form, Alert } from "react-bootstrap";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import V1 from "./Video/V2.mp4";
// import "../App.css";
import { useUserAuth } from "./context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{ width:"100vw", height:"100vh", display:"flex", flexDirection:"column", backgroundRepeat:"no-repeat"}}>
        <video autoPlay muted loop style={{zIndex:"-1", position:"fixed", opacity:"0.8"}}>
            <source src={V1} type="video/mp4"></source> 
            </video>
        
      <div className="p-4 box" style={{backgroundColor: "white" ,width:"400px", height:"450px", alignContent:"center" , borderTopLeftRadius:"25px", borderTopRightRadius:"25px" , borderBottomRightRadius:"25px", borderBottomLeftRadius:"25px", marginLeft:"750px", marginTop:"200px"}}  >
        
        <h2 className="mb-3 text-center" style={{fontFamily:"Times New Roman", fontWeight:"50px"}}>LogIn</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div style={{color:"rgba(63, 94, 255, 1)", marginLeft:"220px"}}>
        <Link to="/">Forgot password?</Link>
        </div>
        <div style={{marginTop:"20px"}}>
          <GoogleButton
            className="g-btn"
            style={{width:"100%"}}
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        
      </div>
      <div className="p-4 box mt-3 text-center " style={{backgroundColor: "white", width:"400px", height:"80px", alignContent:"center", borderTopLeftRadius:"10px", borderTopRightRadius:"10px" , borderBottomRightRadius:"10px", borderBottomLeftRadius:"10px", marginLeft:"750px", marginTop:"200px"}} >
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;