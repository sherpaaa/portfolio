import { Outlet } from 'react-router'
import { AppHeader } from './components/AppHeader'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Outlet />
    </div>
  )
}

export default App
