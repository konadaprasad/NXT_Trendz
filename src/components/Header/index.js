import './index.css'

const Header = () => (
  <div className="header-cont">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="trendz-img"
      alt="website logo"
    />
    <div className="nav-cont">
      <li className="para">Home</li>
      <li className="para">Products</li>
      <li className="para">Cart</li>
      <button className="btn">Logout</button>
    </div>
  </div>
)

export default Header
