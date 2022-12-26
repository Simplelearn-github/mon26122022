import React from 'react'
import { Carousel, Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'


export const Home = () => {
  return (
    <div>
      <NavLink/>
     
        <div>    
 <Navbar bg="primary" expand="lg" variant='secondary ' >
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="Registration">Registration</Nav.Link>
            <Nav.Link href="Mapping">Mapping</Nav.Link>
            <Nav.Link href="Filter">Filter</Nav.Link>
            <NavDropdown title="React" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
               Student
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Faculty</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Guest
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div> 
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.elearninfotech.com/img/slider/Adwords%20Training.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To ELearn Infotech</h3>
          
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.elearninfotech.com/img/slider/SEO%20Training.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>About ELearn Infotech</h3>
          <p>Over 15+ Courses & 25000+ Professionals Trained.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://www.elearninfotech.com/img/slider/Digital%20Marketing%20Training.webp"
          alt="Third slide"
        />
         <Carousel.Caption>
          <h3 >Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
     <div className="footer-copyright text-center py-3">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
     </div>
    </div>
  )
}
