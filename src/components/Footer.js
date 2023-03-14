import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import { FaWifi } from '@react-icons/all-files/fa/FaWifi'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about/">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/Submission/">
                        Submission
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/program/">
                        Program
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/committee/">
                        Committee
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog/">
                        News and Announcements
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="https://icc2022.ieee-icc.org/"
                      >
                        IEEE International Conference on Communications 2022
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/IEEEICC/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/ieeeicc">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <br />
                <br />
                <a
                  className="navbar-item"
                  href="https://yamazato.nuee.nagoya-u.ac.jp/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Nagoya University Yamazato Laboratory"
                >
                  <FaWifi />
                  &nbsp;&nbsp;Yamazato Laboratory
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
