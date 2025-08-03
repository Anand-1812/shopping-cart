import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Outlet />
      </div>
    </>
  );
}

export default App
