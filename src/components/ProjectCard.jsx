import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { useState } from 'react'
import Modal from 'react-modal'
import { MdCancel } from 'react-icons/md'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(100, 100, 100, 0.9)',
  },
  content: {
    // width: "90vw",
    maxWidth: '40rem',
    height: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    // margin:"1rem",
  },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export const ProjectCard = (props) => {
  //以下モーダルの開閉処理の記述
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //ここはよくわからん
    subtitle.style.color = '#465071'
  }

  function closeModal() {
    setIsOpen(false)
  }

  //モーダルタイトルの表示
  const titleSection = {
    position: 'sticky',
    left: '0',
    top: '0',
    zIndex: '99',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: '1rem 1.25rem',
  }

  const ModalTitle = {
    color: '#4A5477',
    fontSize: '1.25rem',
    margin: '1rem 0',
  }

  const closeButton = {
    width: '2rem',
    height: '2rem',
    border: 'none',
    backgroundColor: '#FFF',
  }

  const cancelStyle = {
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#4A5477',
  }
  const contentSection = {
    padding: '1.25rem',
  }

  //dlのスタイル
  const dlstyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  }

  const dtstyle = {
    width: '100%',
    padding: '0.5rem 1rem',
    color: '#4A5477',
    backgroundColor: '#E3E5EE',
    fontSize: '0.875rem',
  }

  const ddstyle = {
    width: '100%',
    padding: '0.5rem 1rem',
    marginLeft: '0',
    marginBottom: '10px',
    color: '#4A5477',
    backgroundColor: '#F6F7F9',
    fontSize: '0.875rem',
  }

  //レスポンシブの記述
  const isDesktop = useMediaQuery({
    query: '(min-width:780px)',
  })
  const isMobile = useMediaQuery({ query: '(max-width:780px' })

  //プロジェクトカードの記述
  const projectBase = {
    flexBasis: isDesktop && 'calc((100% - 2rem) / 2)',
    flextWidth: isDesktop && 'calc((100% - 2rem) / 2)',
    marginTop: '2rem',
  }
  const projectImg = {
    backgroundColor: '#EDEEF1',
    border: 'none',
    width: isDesktop && '100%',
    height: isDesktop && '100%',
  }

  const projectBaseM = {
    flexBasis: isDesktop && 'calc((100% - 2rem) / 2)',
    flextWidth: isDesktop && 'calc((100% - 2rem) / 2)',
    maxWidth: '343px',
    marginTop: '2rem',
  }
  const projectImgM = {
    backgroundColor: '#EDEEF1',
    border: 'none',
    width: isDesktop && '100%',
    height: isDesktop && '15rem',
    maxWidth: '100%',
  }
  const projectTitle = {
    fontSize: '1rem',
    color: '#4A5477',
  }
  const tag = {
    display: 'inline-block',
    padding: '0.3rem 1rem',
    borderRadius: '1rem',
    fontSize: '0.875rem',
    letterSpacing: '0.08rem',
    backgroundColor: '#E3E5EE',
    color: '#4A5477',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
  }

  const projectText = {
    fontSize: '1rem',
    letterSpacing: '0.05rem',
    color: '#4A5477',
    lineHeight: '1.75rem',
    marginTop: '1rem',
  }
  return (
    <>
      {isDesktop && (
        <div style={projectBase}>
          <img src={props.rf} alt="" style={projectImg} />
          <h3 style={projectTitle}>{props.ptitle}</h3>
          <span style={tag}>{props.ptag1}</span>{' '}
          <span style={tag}>{props.ptag2}</span>{' '}
          <span style={tag}>{props.ptag3}</span>{' '}
          <p style={projectText}>{props.pcaption}</p>
          <DetailButton onClick={openModal}>詳細を見る</DetailButton>
        </div>
      )}
      {!isDesktop && (
        <div style={projectBaseM}>
          <img src={props.rf} alt="" style={projectImgM} />
          <h3 style={projectTitle}>{props.ptitle}</h3>
          <span style={tag}>{props.ptag1}</span>{' '}
          <span style={tag}>{props.ptag2}</span>{' '}
          <span style={tag}>{props.ptag3}</span>{' '}
          <p style={projectText}>{props.pcaption}</p>
          <DetailButton onClick={openModal}>詳細を見る</DetailButton>
        </div>
      )}
      {/* 以下モーダルの記述 */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="プロジェクト詳細"
      >
        <div style={titleSection}>
          <h2 style={ModalTitle} ref={(_subtitle) => (subtitle = _subtitle)}>
            {props.ptitle}
          </h2>
          <button onClick={closeModal} style={closeButton}>
            <MdCancel style={cancelStyle} />
          </button>
        </div>
        <ContentSection>
          <h3>概要</h3>
          <p>{props.pcaption} </p>
          <h3>ポイント</h3>
          <ul>
            <li>{props.point1}</li>
            <li>{props.point2}</li>
          </ul>
          <dl style={dlstyle}>
            <dt style={dtstyle}>期間</dt>
            <dd style={ddstyle}>{props.duration}</dd>
            <dt style={dtstyle}>メンバー</dt>
            <dd style={ddstyle}>{props.member}</dd>
            <dt style={dtstyle}>担当業務</dt>
            <dd style={ddstyle}>
              <span>{props.ptag1}</span> <span>{props.ptag2}</span>{' '}
              <span>{props.ptag3}</span>{' '}
            </dd>{' '}
          </dl>
        </ContentSection>
      </Modal>
    </>
  )
}

const DetailButton = styled.button`
display:block;
width:100%;
padding:0.5rem;
margin:1.5rem 0;
color:#4A5477;
background:#FFF;
border:solid 1px #4A5477;
border-radius:0.25rem;
font-size:0.875rem;
letter-spacing:0.1rem;
&:hover {
  background-color:#4A5477;
  color:#FFF;
  cursor: pointer;
`
const ContentSection = styled.div`
  padding: 0rem 1.25rem;
  > h3 {
    font-size: 1rem;
    margin: 1rem 0 0.5rem 0;
    color: #434A63;
    letter-spacing:0.1rem;
  }
  > p {
    margin:0.5rem 0 1rem 0;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    color: #4A5477;
    line-height: 1.75rem;
  }
  > ul {
    padding-left:1rem;
    margin:0.5rem 0 1rem 0;
      >li {
        font-size: 1rem;
        letter-spacing: 0.05rem;
        color: #4A5477;
        line-height: 1.75rem;
      }
    }
  }
  >dl{
    dd{
      span{
        display: inline-block;
        padding: 0.3rem 1rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        letter-spacing: 0.08rem;
        background-color: #E3E5EE;
        color: #4A5477;
        margin-right: 0.5rem;
      }
    }
  }
`
