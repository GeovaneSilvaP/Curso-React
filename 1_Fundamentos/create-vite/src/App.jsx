import './App.css'
import FirstComponents from './components/FirstComponents';
import TemplteExpression from './components/TempleteExpression';
import MyComponents from "./components/MyComponents";
import Events from './components/Events';

function App() {

  return (
    <div className='App'>
      <h1>Fundamentos do React</h1>
      <FirstComponents/>
      <TemplteExpression/>
      <MyComponents/>
      <Events/>
    </div>
  )
}

export default App
