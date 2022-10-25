import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Biryani from './biryani';
import Kebabs from './kebads';
import Straters from "./straters";
import Curries from './curries'
import Deserts from "./deserts";
import { NavDropdown } from "react-bootstrap";


class RouteNavBar extends React.Component{
    render(){
        return(
            <div>
                
                <Navbar bg="primary" variant="primary">
                 <Container>
                 <BrowserRouter>
                 <NavDropdown title="MENU LIST"  >
                    <NavDropdown.Item href ='/biryani'>Biryani</NavDropdown.Item>
                    <NavDropdown.Item href='./kebabs'>KEBABS</NavDropdown.Item>
                    <NavDropdown.Item href ='/straters'>STRATERS</NavDropdown.Item>
                    <NavDropdown.Item href ='/curries'> CURRIES</NavDropdown.Item>
                    <NavDropdown.Item href='/deserts'> DESERTS</NavDropdown.Item>
                 </NavDropdown> 
                <Routes>
                    <Route path="/biryani" element={<Biryani />} />
                    <Route path="/kebabs" element={<Kebabs />} />
                    <Route path="/straters" element={<Straters />} />
                    <Route path="/curries" element={<Curries />} />
                    <Route path="/deserts" element={<Deserts/>} />
                </Routes>
                </BrowserRouter>             
                </Container>
                </Navbar>
                
            </div>
        );
    }
}

export default RouteNavBar;


// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Biryani from './biryani';
// import Kebabs from './kebads';
// import Straters from "./straters";
// import Curries from './curries'
// import Deserts from "./deserts";


// class RouteNavbar extends React.Component{
//     render(){
//         return(
//             <div>
            
//             <BrowserRouter>
//             <Navbar bg="dark" variant="dark">
//                 <Container>
//                     <Nav style={{color:'white'}}>MENU LIST </Nav>     
//                     <Navbar.Collapse >         
                       
//                     <Nav>
//                         <Nav.Link href ='/biryani'> BIRYANI </Nav.Link>
//                         <Nav.Link href ='./kebabs'>KEBABS</Nav.Link>
//                         <Nav.Link href ='/straters'> STRATERS</Nav.Link>
//                         <Nav.Link href ='/curries'> CURRIES</Nav.Link>
//                         <Nav.Link href ='/deserts'> DESERTS </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>  
//                 </Container>
//                 </Navbar>
//                 <Routes>
//                         <Route path="/biryani" element={<Biryani />} />
//                         <Route path="/kebabs" element={<Kebabs />} />
//                         <Route path="/straters" element={<Straters />} />
//                         <Route path="/curries" element={<Curries />} />
//                         <Route path="/deserts" element={<Deserts/>} />
//                     </Routes>  
                    
            
//             </BrowserRouter>
            
//             </div>
//         );
//     }
// }

// export default RouteNavbar;
