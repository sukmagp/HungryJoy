import { Nav, NavDropdown} from 'react-bootstrap'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './index.scss';

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
          <img
            alt=""
            src="/logoQ.png"
            width="82"
            height="60"
            className="d-inline-block align-top logo"
          />
        <Nav className="ml-auto nav-text">
          <Nav.Link to ="/">Home</Nav.Link>
          <Nav.Link href ="#menu">Menu</Nav.Link>
          <NavDropdown title="Category" className="basic-nav-dropdown">
              <NavDropdown.Item to="/FoodCategory" className='category'>
                Food
              </NavDropdown.Item>
              <NavDropdown.Item to="/DrinkCategory">
                Drink
              </NavDropdown.Item>
              <NavDropdown.Item to="/AppetizerCategory">
                Appetizer
              </NavDropdown.Item>
              <NavDropdown.Item to="/DessertCategory">
                Dessert
              </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href ="#footer">Contact Us</Nav.Link>
          <Nav className='icon'>
          <Nav.Link to ="/Cart">
              <AddShoppingCartIcon color="action" />
          </Nav.Link>
          <Nav.Link to ="/User">
            <AccountCircleIcon>
              ICONS
            </AccountCircleIcon>
          </Nav.Link>
          </Nav>
        </Nav>
      </div>
    </div>
  )
}

export default Navigation;