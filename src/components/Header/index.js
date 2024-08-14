import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <div className="logo-container">
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="button-icon-container">
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="hamburger-button"
              data-testid="hamburgerIconButton"
            >
              {' '}
              <GiHamburgerMenu />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <>
              <div className="popup-items">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  {' '}
                  <IoMdClose />
                </button>
                <nav>
                  <ul className="nav-container">
                    <li className="nav-item">
                      <Link to="/" className="link-item">
                        <AiFillHome /> Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="link-item">
                        <BsInfoCircleFill /> About
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
    <hr className="hr-line" />
  </>
)

export default Header
