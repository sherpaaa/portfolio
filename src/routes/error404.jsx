import { Link } from 'react-router-dom'

export const Error404 = () => {
  const eroorWrapper = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const errorTitle = {
    fontSize: '4rem',
    fontWeight: '900',
    letterSpacing: '1rem',
    margin: '0',
    textAlign: 'center',
  }

  const errorCaption = {
    fontSize: '1rem',
  }

  const backtoHome = {
    letterSpacing: '0.25rem',
    color: '#FFF',
    backgroundColor: '#465071',
    textDecoration: 'none',
    borderRadius: '0.25rem',
    padding: '1.25rem 1.25rem',
    marginTop: '2rem',
  }
  return (
    <>
      <div style={eroorWrapper}>
        <h1 style={errorTitle}>
          404
          <br />
          ฅ^•ω•^ฅ
        </h1>
        <p style={errorCaption}>
          おっと、ねこちゃんは見つかりましたが、ページは見つかりませんでした
        </p>
        <Link to="/home" style={backtoHome}>
          HOMEへ戻る
        </Link>
      </div>
    </>
  )
}
