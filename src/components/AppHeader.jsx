import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import MediaQuery from 'react-responsive'

export const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  //レスポンシブ対応。isMobileでモバイルサイズかを判断している
  const isDesktop = useMediaQuery({
    query: '(min-width:780px)',
  })
  const isMoble = useMediaQuery({ query: '(max-width:780px' })

  //Desktop用のメニュー
  const titleLink = {
    textDecoration: 'none',
  }
  const menuItem = {
    color: '#465071',
    textDecoration: 'none',
    padding: '1.25rem 1.25rem',
  }

  // モバイルメニューに関するスタイル

  const menuIcon = {
    fontSize: '1.7rem',
    border: 'none',
    color: '#465071',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  }

  const menuContainer = {
    position: 'absolute',
    left: '0',
    top: '4rem',
    width: '100%',
    backgroundColor: '#FFF',
    zIndex: '1',
  }

  const mobileMenu = {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    height: '50vh',
    width: '100%',
  }
  const mobileMenuItem = {
    display: 'inline-block',
    width: '80vh',
    fontSize: '1.5rem',
    color: '#465071',
    textDecoration: 'none',
    margin: '0',
    padding: '1rem',
  }

  //閉じるボタン、消したのでコメントアウト
  const closeButton = {
    fontSize: '1.25rem',
    color: '#465071',
    backgroundColor: '#FFF',
    margin: '1rem',
    padding: '0.5rem',
    border: 'none',
    cursor: 'pointer',
  }

  // メニュー開閉に関する処理
  const switchMenuOpen = () => {
    return setIsMenuOpen(!isMenuOpen)
  }

  // const headerWrapper = {
  //   // display: isMoble && 'flex',
  //   // flexDirection: isMoble && 'column',
  // }

  return (
    <>
      <div>
        <Sdiv>
          <STitle>
            <Link to="home" style={titleLink}>
              Kousuke Masuda
            </Link>
          </STitle>
          {isDesktop && (
            <SMenu>
              <li>
                <Link to="home" style={menuItem}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="resume" style={menuItem}>
                  RESUME
                </Link>
              </li>
              <li>
                <Link to="projects" style={menuItem}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link to="contact" style={menuItem}>
                  CONTACT
                </Link>
              </li>
            </SMenu>
          )}
          <MediaQuery maxWidth={780}>
            <button
              type="button"
              aria-controls="drawer"
              aria-expanded="false"
              onClick={switchMenuOpen}
              style={menuIcon}
            >
              <MdMenu />
            </button>
          </MediaQuery>

          {isMenuOpen && (
            <div
              id="drawer"
              class="drawer"
              aria-hidden="true"
              style={menuContainer}
            >
              <ul style={mobileMenu}>
                <li>
                  <Link
                    to="home"
                    style={mobileMenuItem}
                    onClick={switchMenuOpen}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="resume"
                    style={mobileMenuItem}
                    onClick={switchMenuOpen}
                  >
                    RESUME
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    style={mobileMenuItem}
                    onClick={switchMenuOpen}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    style={mobileMenuItem}
                    onClick={switchMenuOpen}
                  >
                    CONTACT
                  </Link>
                </li>
                <button
                  type="button"
                  onClick={switchMenuOpen}
                  style={closeButton}
                >
                  close menu
                </button>
              </ul>
            </div>
          )}
        </Sdiv>
      </div>
    </>
  )
}

const Sdiv = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: rgba(237, 238, 241, 1);
  padding: 0 1.5rem;
`

const STitle = styled.h1`
  font-size: 1.25rem;
  letter-spacing: 0.15rem;
`

const SMenu = styled.ul`
  display: flex;

  > li {
    list-style: none;
    letter-spacing: 0.1rem;
  }
`
