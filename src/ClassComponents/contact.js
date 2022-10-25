import React from "react";
import { Card, CardGroup} from "react-bootstrap";


class ContactUs extends React.Component{
    render(){
        return(
            <div style={{paddingLeft:'20px'}}>
            {[
                'danger',            
        ].map((variant)=>(
                <>
                <h2 style={{textAlign:'center'}}>Contact Us</h2>
                <CardGroup>
                               
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === 'Paradise' ? 'info': 'warning'}
 
                  className="mb-2"
                >
               
               <iframe src="https://goo.gl/maps/GFEN9piBXCU1N1so7" title="Paradise LOCATION"></iframe>
              <Card.Text><h5>Location Of Paradise Biryani at Secunderabad</h5></Card.Text>
               
                </Card> 
                <Card  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === 'Paradise' ? 'info' : 'warning'}
                  
                  className="mb-2">
                <p > <h2>Address</h2> {variant} Circle, Mahatma Gandhi Rd, Sappu Bagh Apaprtment, Jogani, Ramgopalpet, Secunderabad, Telangana 500003</p>
                </Card>
                </CardGroup>
                             

                </>
            ))}
            
            </div>
    
            
        );
    }
}

export default ContactUs