import { Link } from "react-router-dom";
import { Button, Link as ChakraLink } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0"></div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link px-2">
              Projects
            </Link>
          </li>
          <li>
            <Link to="" className="nav-link px-2">
              FAQs
            </Link>
          </li>
         
        </ul>

        <div className="col-md-3 text-end">
          <Link to="/login" as={ChakraLink}>
            <Button style={{borderRadius:'10px', background:'#55ad9b',color:'#f1f8e8',padding:'10px',fontSize:'200',border:'none',fontWeight:'bold'}}  variant="outline" colorScheme="blue" mr={2}>
              Login
            </Button>
          </Link>
          <Link to="/signup" as={ChakraLink}>
            <Button style={{marginLeft:'10px',background:'#55ad9b',color:'#f1f8e8',padding:'10px',fontSize:'200',border:'none',fontWeight:'bold',borderRadius:'10px'}} colorScheme="blue">Sign-up</Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
