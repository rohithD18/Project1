import React from "react";
import { Button, Form } from "react-bootstrap";

const LoginForm =()=>{
    return (
        <Form className="login-form">
          <label>Username:</label>  <input type="text" name='Username' id="styles" /><br/><br/>
          <label>Password:</label>  <input type="password" name='Password' id="styles" /><br/><br/>
            <Button type="submit">Login</Button>
        </Form>
    );
}
export default LoginForm;