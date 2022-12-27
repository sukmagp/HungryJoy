import { Button, Form, FormControl, Nav, NavDropdown, InputGroup, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { getCategories } from '../../app/api/product'
import { setCategory, setKeyword } from '../../app/features/Product/actions'
import { totalItemCart } from '../../utils'
import logo from '../../images/logoQ.png';
import './index.scss';


const Navigation = () => {

  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    getCategories()
    .then(({data}) => setCategories(data))
  }, []);

  const [token, setToken] = useState();
  useEffect(() => {
    
      const token = auth.token;
      console.log(token);
      setToken(token);
    
  }, []);

  const logout = () => { 
    localStorage.removeItem('auth');
   navigate('/Auth')
 }
  

  return (
    <div className="nav-header">
      <div className="navbar">
          <img
            alt=""
            src={logo}
            width="82"
            height="60"
            className="d-inline-block align-top logo"
          />
        <Form>
            <InputGroup>
              <FormControl type="text" placeholder="Cari disini aja..." onChange={e => dispatch(setKeyword(e.target.value))}/>
              <Button variant="outline-light" href="#menu">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Form>
        <Nav className="ml-auto nav-text">
          <Nav.Link >
            <Link to ="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href ="#menu">Menu</Nav.Link>
          <NavDropdown title={products.category || 'Category'} id="navbarScrollingDropdown">
              {
              Array.isArray(categories)
                ? categories.map((category, i) => (
                  <NavDropdown.Item 
                    href="#" 
                    key={i} 
                    active={category.name === products.category} 
                    onClick={() => dispatch(setCategory(category.name))}
                  >{category.name}</NavDropdown.Item>
                ))
                  : null
              }
            </NavDropdown>
          <Nav.Link href ="#footer">Contact Us</Nav.Link>
          {
              token ?
            <Nav className='icon'>       
            <LinkContainer to="/cart" style={{marginRight: '20px'}}>
            <Nav.Link className="position-relative" title="Your Cart Here">
                <FontAwesomeIcon icon={faCartPlus} />
                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                  { totalItemCart(cart) }
                  <span className="visually-hidden">Total item</span>
                </span>
            </Nav.Link>
            </LinkContainer>
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} className="Dropdown-itemMenu">
              <NavDropdown.Item>
                <Link to='/account'>
                Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop-logout" onClick={logout}>
              Logout
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            :
            <Nav.Link >
                <Link to ="/Auth">
                <FontAwesomeIcon icon={faRightToBracket} />
                &nbsp;Login
                </Link>
            </Nav.Link>
          }
        </Nav>
      </div>
    </div>
  )
}

export default Navigation;