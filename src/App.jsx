import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer'

function App() {
  const [theme, setTheme] = useState('light');
  const [noOfItems, setNoOfItems] = useState(0);


  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}
          noOfItems={noOfItems} setNoOfItems={setNoOfItems}
        />
        <Outlet context={{ noOfItems, setNoOfItems }} />
        <Footer />
      </div>
    </>
  );
}

export default App
