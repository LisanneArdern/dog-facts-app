import './App.css'
import Card from './components/Card'
import dogFacts from './data.json'

export default function App() {
  return (
    <div className="App">
     {dogFacts.map(dogFact => {
        const { fact, id } = dogFact
        return (
          <Card key={id} fact={fact}/>
            
            
            
         
        )
      })}
    </div>
  )
}
