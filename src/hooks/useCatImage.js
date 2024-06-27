import { useEffect, useState } from "react"

const CAT_IMG_URL = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  const getImage = async () => {
    const firtstWord = fact.split(' ', 1)[0]
    const rawRes = await fetch(`https://cataas.com/cat/says/${firtstWord}?size=50&color=red&json=true`)
    const response = await rawRes.json()
    const { _id } = response
    const url = `/cat/${_id}/says/${firtstWord}`

    setImageUrl(url)
  }

  useEffect(() => {
    if (!fact || fact.length === 0) return
    getImage()
  }, [fact])

  return { imageUrl: `${CAT_IMG_URL}${imageUrl}` }
}