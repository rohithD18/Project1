import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OtpVerify = () => {
  return (
    <div>
    <Link to="/phonesignup">
   <div className="d-grid gap-2 mt-3">
     <Button variant="success" type="Submit">
       Click To Verify Your Number
     </Button>
   </div>
   </Link> </div>
  )
}

export default OtpVerify

