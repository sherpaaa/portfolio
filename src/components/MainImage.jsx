export const MainImage = (props) => {
  const imgContainer = {
    height: '90vh',
    width: '100%',
    backgroundColor: '#EDEEF1',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  }

  const mainTitle = {
    fontSize: '3rem',
    letterSpacing: '0.4rem',
    marginBottom: '4rem',
    textAlign: 'center',
  }

  const mainNote = {
    fontSize: '1.25rem',
    letterSpacing: '0.1rem',
    marginBottom: '0.5rem',
  }

  return (
    <div style={imgContainer}>
      <h2 style={mainTitle}>{props.title}</h2>
      <span style={mainNote}>{props.subtitle1}</span>
      <span style={mainNote}>×</span>
      <span style={mainNote}>{props.subtitle2}</span>
    </div>
  )
}
