import { MainImage } from '../components/MainImage'
import iconImg from '../img/icon.JPG'
import { SnsButton } from '../components/SnsButton'

import { Footer } from '../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { AppHeader } from '../components/AppHeader'
import { SnsStyledButton } from '../components/SnsStyledButton'

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
    fontSize: '1rem',
    color: '#465071',
    lineHeight: '1.875rem',
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
          <img src={iconImg} alt="似顔絵" style={imgStyle} />
          <span style={profileTitle}>KOSUKE MASUDA</span>
          <span style={profileNote}>Digital Product Designer</span>
          <span style={profileNote}>×</span>
          <span style={profileNote}>UX Researcher</span>
        </div>
        <div style={profileTextWrapper}>
          <p style={profileText}>
            増田 康祐　デジタルプロダクトデザイナー/UXリサーチャー
          </p>
          <p style={profileText}>
            株式会社ログラスにて経営管理クラウドLoglassのリサーチ・デザインを担当。
            ユーザーリサーチを踏まえたプロダクトデザインやデザインシステムの整備を行っている。
          </p>
          <p style={profileText}>
            大学院にて、認知心理学／人間工学を研究した後、デザインコンサルティングを手掛けるU'eyes
            Designに入社。インタビューやユーザビリティテストなどのUXリサーチ業務を中心に担当。スマートフォンアプリや車載機器のサービス改善を行う。
            UXリサーチに加え、リサーチに基づいたUI設計も担当。
          </p>
          <p style={profileText}>
            2018年4月にfreee株式会社入社。クラウド会計ソフトのUXリサーチ・デザインを担当する。
            ほぼゼロの状態からUXリサーチをプロダクト開発チームに根付かせ、ユーザー視点でのプロダクト開発文化を定着させる。リサーチチームの立ち上げを経て、freee人事労務や税理士向けのプロダクトなど複数プロダクトのリサーチ・デザインを担当。{' '}
          </p>
          <p style={profileText}>
            2022年9月より株式会社ログラスに入社。経営管理クラウドLoglassのリサーチ・デザインを担当。
            リサーチやプロダクトデザイン、デザインシステムの構築を進めている。
          </p>
          <p style={profileText}>
            2019年 HCD-Net認定人間中心設計専門家資格を取得
          </p>
          <div>
            <SnsStyledButton
              title={'twitter'}
              color={'#1D9BF0'}
              bcolor={'#177CC0'}
              link={'https://twitter.com/sherpaaaaaa'}
            ></SnsStyledButton>{' '}
            <SnsStyledButton
              title={'LinkedIn'}
              color={'#0a66c2'}
              bcolor={'#08529B'}
              link={
                'https://www.linkedin.com/in/%E5%BA%B7%E7%A5%90-%E5%A2%97%E7%94%B0-95073a1b6/'
              }
            ></SnsStyledButton>
            <SnsStyledButton
              title={'note'}
              color={'#41C9B4'}
              bcolor={'#34A190'}
              link={'https://note.com/sherpaaaaaa/'}
            ></SnsStyledButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
