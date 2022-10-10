 import React from 'react';
 import Navs from "./access/component/Navs"
 import Blogs from "./access/component/Blogs"; 
  import Footer from "./access/component/Footer"
import './access/nav.css'

function App() {
  return (
    <div className="App">
      <Navs />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
