import { useLocalObservable } from 'mobx-react'
import { ReactNode, createContext, useContext } from 'react'

import { ICharacter } from '@lib'
import { createCharactersStore } from '@store'

const CharacterContext = createContext({
  characters: [] as ICharacter[],
  addCharacters: (_characters: ICharacter[]) => {},
  setCharacters: (_characters: ICharacter[]) => {}
})

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const todoStore = useLocalObservable(createCharactersStore)

  return (
    <CharacterContext.Provider value={todoStore}>
      {children}
    </CharacterContext.Provider>
  )
}

export const useCharacterStore = () => useContext(CharacterContext)
