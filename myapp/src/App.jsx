import './App.css'
import Footer from './components/ItemContainer/Footer'
import ItemDetail from './components/ItemContainer/ItemDetail'
import NavBar from './components/ItemContainer/NavBar'


function App() {
  return (
    <>
      <header className='navBarContainer'>
        <NavBar/>
      </header>
      <main>
        <ItemDetail/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
