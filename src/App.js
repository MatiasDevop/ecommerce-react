import React from 'react'
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
 // later on we're gonna change much better way to import components
import { Products, Navbar } from './components';

const App = () => {
    return (
        <div>
            <Navbar />
           <Products />
        </div>
    )
}

export default App;
