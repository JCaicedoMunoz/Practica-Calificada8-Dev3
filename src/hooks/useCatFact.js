import { useEffect, useState } from "react"
import { getCatFact } from "../services/facts"

function useCatFact() {
  const [fact, setFact] = useState([])

  const refreshFact = () => {
    getCatFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export default useCatFact