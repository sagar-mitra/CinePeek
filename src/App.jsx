import { Outlet } from 'react-router-dom'
import Header from "../src/components/Header"

const App = () => {
  return (
    <div className='font-(family-name:--font-mona) min-h-screen bg-[var(--main-color)]'>
      <Header />
      <div className='p-16'>
        <Outlet />
      </div>
    </div>
  )
}

export default App