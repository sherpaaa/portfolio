import { MainImage } from '../components/MainImage'
import { Footer } from '../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { AppHeader } from '../components/AppHeader'

export default function Contact() {
  const isMoble = useMediaQuery({ query: '(max-width:780px' })

  const contactContainer = {
    maxWidth: '40rem',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '4rem',
    marginBottom: '8rem',
    padding: isMoble && '0 1.5rem',
  }

  const contactText = {
    lineHeight: '3rem',
    margin: '1rem auto 2rem auto',
    textAlign: 'center',
  }
  const twitterLink = {
    fontSize: '1.25rem',
    letterSpacing: '0.2rem',
    textDecoration: 'none',
    backgroundColor: '#A3ABC6',
    color: '#f5f5f5',
    width: '100%',
    padding: '1.25rem ',
    textAlign: 'center',
  }
  return (
    <div>
      <AppHeader />
      <MainImage
        title={'CONTACT'}
        subtitle1={'Kousuke Masuda'}
        subtitle2={'Research and Design'}
      />
      <div style={contactContainer}>
        <p style={contactText}>
          個人事業主としても、リサーチやデザインをしています
          <br />
          ご相談はTwitterのDMにてご連絡ください
        </p>
        <a
          href="https://twitter.com/sherpaaaaaa"
          style={twitterLink}
          target="_blank"
        >
          Twitterへ
        </a>
      </div>
      <Footer />
    </div>
  )
}
