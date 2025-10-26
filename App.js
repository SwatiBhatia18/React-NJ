import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = () => {
  return(
    <div className="res-card" style={{
      backgroundColor: "#f0f0f0"
    }}>
      <h3>Meghana Foods </h3>
      <img 
      class
      alt="res-image"
      src="https://b.zmtcdn.com/data/pictures/1/50691/92d9b4053ef0965120828b4fa4eecc3b.jpg"></img>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">
        
      </div>
      <div className="res-container">
        <RestaurantCard/>
      </div>

    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
