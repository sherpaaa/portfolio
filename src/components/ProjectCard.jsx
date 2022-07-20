import defaultImg from '../img/noImage.png'
import { useMediaQuery } from 'react-responsive'

export const ProjectCard = (props) => {
  const isDesktop = useMediaQuery({
    query: '(min-width:780px)',
  })
  const isMobile = useMediaQuery({ query: '(max-width:780px' })

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
    color: '#465071',
  }
  const tag = {
    display: 'inline-block',
    padding: '0.4rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.5rem',
    letterSpacing: '0.08rem',
    fontWeight: '600',
    backgroundColor: '#A3ABC6',
    color: '#0F1D4D',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
  }

  const projectText = {
    fontSize: '0.875rem',
    color: '#465071',
    lineHeight: '1.5rem',
    marginTop: '1rem',
  }
  return (
    <>
      {isDesktop && (
        <div style={projectBase}>
          <img src={props.rf} alt="データなし" style={projectImg} />
          <h3 style={projectTitle}>{props.ptitle}</h3>
          <span style={tag}>{props.ptag1}</span>{' '}
          <span style={tag}>{props.ptag2}</span>{' '}
          <span style={tag}>{props.ptag3}</span>{' '}
          <p style={projectText}>{props.pcaption}</p>
        </div>
      )}
      {!isDesktop && (
        <div style={projectBaseM}>
          <img src={props.rf} alt="データなし" style={projectImgM} />
          <h3 style={projectTitle}>{props.ptitle}</h3>
          <span style={tag}>{props.ptag1}</span>{' '}
          <span style={tag}>{props.ptag2}</span>{' '}
          <span style={tag}>{props.ptag3}</span>{' '}
          <p style={projectText}>{props.pcaption}</p>
        </div>
      )}
    </>
  )
}
