import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const isMoble = useMediaQuery({ query: '(max-width:780px' })

  // モバイルメニューに関するスタイル
  const menuContainer = {
    width: '100%',
    backgroundcolor: '#FFF',
    zIndex: '1',
  }

  const mobileMenu = {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    // height: '40vh',
    width: '100%',
  }
  const mobileMenuItem = {
    display: 'inline-block',
    width: '25vh',
    fontSize: '1rem',
    color: '#465071',
    textDecoration: 'none',
    padding: '1.25rem',
  }

  const footerStyle = {
    height: '10rem',
    width: '100%',
    backgroundColor: '#606578',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const footerText = {
    color: '#FFF',
  }

  return (
    <>
      {isMoble && (
        <nav>
          <div
            id="drawer"
            class="drawer"
            // aria-hidden="true"
            style={menuContainer}
          >
            <ul style={mobileMenu}>
              <li>
                <Link to="/home" style={mobileMenuItem}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/resume" style={mobileMenuItem}>
                  RESUME
                </Link>
              </li>
              <li>
                <Link to="/projects" style={mobileMenuItem}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="/contact" style={mobileMenuItem}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <footer style={footerStyle}>
        <p style={footerText}>© 2022 KOUSUKE MASUDA</p>
      </footer>
    </>
  )
}
