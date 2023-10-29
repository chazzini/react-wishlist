
import './App.css';
import React from 'react'
import WishList from './components/WishList';



function App() {

  return (
    <>
      <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
          <h1 className="display-4">My Personal Whishlist</h1>
          <p className="lead mb-0">List of items I want to purchase.</p>
        </div>
      </div>
      <WishList />
      
    </>
  );
}

export default App;
