import './App.css'
import Header from './components/Header.tsx'
import Game from './components/Game.tsx'
import Footer from './components/Footer.tsx'


function App() {

  return (
    <>
    <div className='root'>
      <Header />
        <div className='game'>
          <Game />
        </div>
      <Footer />
    </div>
    </>
  )
}

export default App
