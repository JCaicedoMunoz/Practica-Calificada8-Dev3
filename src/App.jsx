import './App.css'
import useCatFact from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={refreshFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {
        imageUrl && <img src={imageUrl} width={300}
          alt={`Image extracted using the first three words for ${fact}`} />
      }
    </main>
  )
}

export default App