import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <div className="inner-container">
      <Header />
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="image"
        />
      </div>
    </div>
  </div>
)

export default Home
