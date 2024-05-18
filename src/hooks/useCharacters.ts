import axios from 'axios'
import { useEffect, useState } from 'react'

import { ICharacter } from '@lib'

interface UseCharactersProps {
  uri?: string
  params?: Record<string, any>
}

export const useCharacters = ({ uri, params }: UseCharactersProps) => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isPushing, setIsPushing] = useState(false)
  const [error, setError] = useState(null)

  const fetchCharacters = async () => {
    setIsLoading(true)

    if (!process.env.EXPO_PUBLIC_API_URL) {
      console.error('API URL is not defined')
      return
    }

    try {
      const res = await axios.get(
        process.env.EXPO_PUBLIC_API_URL + (uri || ''),
        { params }
      )

      if (isPushing) {
        setCharacters(prev => [...prev, ...res.data])
        setIsPushing(false)
        setIsLoading(false)
        return
      }

      setCharacters(res.data)
    } catch (error: any) {
      setError(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoading) return
    fetchCharacters()
  }, [uri, params?.name])

  useEffect(() => {
    if (isLoading) return
    setIsPushing(true)
    fetchCharacters()
  }, [params?.count])

  const reload = () => fetchCharacters()

  return { characters, reload, isLoading, error }
}
