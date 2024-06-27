const CAT_RDM_FACT = 'https://catfact.ninja/fact'

export const getCatFact = async () => {
  const rawFact = await fetch(CAT_RDM_FACT)
  const { fact } = await rawFact.json()
  return fact
}