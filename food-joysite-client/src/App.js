import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { listen } from "./app/listener";
import { AccountBox } from "./components/accountBox";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import Home from "./pages/Home";
import Menu from "./pages/Home/Menu";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Profile from "./components/Profile";
import Address from "./components/Address";
import Checkout from "./pages/Checkout";
import AddAddress from "./components/AddAddress";
import Order from "./components/Order";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  useEffect(() => {
    listen();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route
              path="/Auth"
              element={
                <AppContainer>
                  <AccountBox />
                </AppContainer>
              }
            />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/*" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/address" element={<Address />} />
            <Route path="/add-address" element={<AddAddress />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
