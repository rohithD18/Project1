import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/signup";
import PhoneSignUp from "./components/phoneSignup";
import OtpVerify from "./components/OtpVerify";
import ProtectedRoute from "./components/protectedRouter";
import { UserAuthContextProvider } from "./userAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
              <Route path="otpverify" element={<OtpVerify />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;