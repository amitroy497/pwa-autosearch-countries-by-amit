import './App.css'
import Autocomplete from './components/autoComplete'
import countries from './components/countries'
function App() {
  return (
    <div className='appContainer'>
      <h1>Countries Auto Search</h1>
      <Autocomplete items={countries} />
    </div>
  )
}

export default App
