export const ResumeItem = (props) => {
  const resumeContainer = {
    marginTop: '2rem',
  }
  const resumeTitle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '0.15rem',
    color: '#465071',
  }
  const resumeSubTitle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#465071',
  }
  const tag = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.08rem',
    backgroundColor: '#E3E5EE',
    color: '#4A5477',
    marginRight: '0.5rem',
    marginBottom: '0.5rem',
  }

  const resumeText = {
    fontSize: '1rem',
    color: '#465071',
    lineHeight: '2rem',
    marginTop: '1rem',
  }
  return (
    <div style={resumeContainer}>
      <h3 style={resumeTitle}>{props.rtitle}</h3>
      <p style={resumeSubTitle}>{props.raffiliation}</p>
      <span style={tag}>{props.rtag1}</span>{' '}
      <span style={tag}>{props.rtag2}</span>{' '}
      <span style={tag}>{props.rtag3}</span>
      <p style={resumeText}>{props.rtext}</p>
    </div>
  )
}
