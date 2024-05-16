import axios from 'axios'
import { useEffect, useState } from 'react'

import { ICharacter } from '@interfaces'

export const useCharacters = (name?: string) => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchCharacters = async () => {
    setIsLoading(true)

    if (!process.env.EXPO_PUBLIC_API_URL) {
      console.error('API URL is not defined')
      return
    }

    try {
      const res = await axios.get(process.env.EXPO_PUBLIC_API_URL, {
        params: { name }
      })

      setCharacters(res.data)
    } catch (error: any) {
      setError(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    fetchCharacters()
  }, [name])

  return { characters, isLoading, error }
}
