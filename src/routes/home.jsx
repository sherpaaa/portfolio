import { MainImage } from '../components/MainImage'
import iconImg from '../img/icon.JPG'
import { SnsButton } from '../components/SnsButton'
import { Footer } from '../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { AppHeader } from '../components/AppHeader'

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width:780px)' })

  const profileWrapper = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8rem',
  }
  const profileContainer = {
    height: '70vh',
    backgroundColor: '#FFF',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  }

  const imgStyle = {
    maxWidth: '15rem',
    maxHeight: '15rem',
    marginBottom: '2rem',
  }

  const profileTitle = {
    fontSize: '1.5rem',
    letterSpacing: '0.2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  }
  const profileNote = {
    fontSize: '1rem',
    letterSpacing: '0.1rem',
    marginBottom: '1rem',
  }

  const profileTextWrapper = {
    maxWidth: '40rem',
    padding: '0 1.5rem',
  }

  const profileText = {
    ifontSize: '1rem',
    color: '#212841',
    lineHeight: '1.75rem',
    marginBottom: '1.5rem',
  }

  return (
    <div>
      <AppHeader />
      <MainImage
        title={'KOUSUKE MASUDA'}
        subtitle1={'Product Design'}
        subtitle2={'UX Research'}
      />

      <div style={profileWrapper}>
        <div style={profileContainer}>
          <img src={iconImg} alt="" style={imgStyle} />
          <span style={profileTitle}>KOSUKE MASUDA</span>
          <span style={profileNote}>Digital Product Designer</span>
          <span style={profileNote}>×</span>
          <span style={profileNote}>UX Researcher</span>
        </div>
        <div style={profileTextWrapper}>
          <p style={profileText}>
            プロダクトデザイナー。クラウド人事労務ソフトのリサーチ・デザインを担当。
            定性と定量を合わせたリサーチとリサーチに基づいたプロダクトデザインを行っている。
          </p>
          <p style={profileText}>
            大学院にて、認知心理学／人間工学を研究した後、デザインコンサルティングを手掛けるU'eyes
            Designに入社。インタビューやユーザビリティテストなどのUXリサーチ業務を中心に担当。スマートフォンアプリや車載機器のサービス改善を行う。
            UXリサーチに加え、リサーチに基づいたUI設計も担当。
          </p>
          <p style={profileText}>
            2018年4月にfreee株式会社入社。クラウド会計ソフトのUXリサーチ・デザインを担当する。
            ほぼゼロの状態からUXリサーチをプロダクト開発チームに根付かせ、ユーザー視点でのプロダクト開発文化を定着させた。リサーチチームの立ち上げを経て、freee人事労務や税理士向けのプロダクトのリサーチ・デザインを担当。{' '}
          </p>
          <p style={profileText}>HCD-Net認定人間中心設計専門家の資格保有</p>
          <div>
            <SnsButton
              title={'note'}
              color={'#41C9B4'}
              link={'https://note.com/sherpaaaaaa/'}
            />
            <SnsButton
              title={'Twitter'}
              color={'#1d9bf0'}
              link={'https://twitter.com/sherpaaaaaa'}
            />
            <SnsButton
              title={'Wantedly'}
              color={'#21bddb'}
              link={'https://www.wantedly.com/id/kosuke_masuda'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
