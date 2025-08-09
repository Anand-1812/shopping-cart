import { use, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer'

function App() {
  const [theme, setTheme] = useState('light');
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}
          noOfItems={cartItems.length} setNoOfItems={setNoOfItems}
        />
        <Outlet context={{ noOfItems, setNoOfItems, cartItems, setCartItems }} />
        <Footer />
      </div>
    </>
  );
}

export default App
