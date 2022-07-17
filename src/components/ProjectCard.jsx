import defaultImg from '../img/noImage.png'
import { useMediaQuery } from 'react-responsive'

export const ProjectCard = (props) => {
  const isDesktop = useMediaQuery({
    query: '(min-width:780px)',
  })
  const isMoble = useMediaQuery({ query: '(max-width:780px' })

  const projectBase = {
    flexBasis: isDesktop && 'calc((100% - 2rem) / 2)',
    flextWidth: isDesktop && 'calc((100% - 2rem) / 2)',
    maxWidth: isMoble && '327px',
    marginTop: '2rem',
    // padding: isMoble && '0 1.5rem',
  }
  const projectImg = {
    backgroundColor: '#EDEEF1',
    border: 'none',
    width: isDesktop && '100%',
    maxWidth: isMoble && '327px',
    height: isDesktop && '15rem',
    height: isMoble && '100%',
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
    <div style={projectBase}>
      <img src={props.rf} alt="データなし" style={projectImg} />
      <h3 style={projectTitle}>{props.ptitle}</h3>
      <span style={tag}>{props.ptag1}</span>{' '}
      <span style={tag}>{props.ptag2}</span>{' '}
      <span style={tag}>{props.ptag3}</span>{' '}
      <p style={projectText}>{props.pcaption}</p>
    </div>
  )
}