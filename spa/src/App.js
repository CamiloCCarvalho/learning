import './App.css'
import MyRoutes from './routes'
import {NavBar} from './shared/navbar'
import {Footer} from './shared/footer'


function App() {
  return (
    <div className="app">
      <div className="layout">
        <NavBar/>
        <MyRoutes/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
