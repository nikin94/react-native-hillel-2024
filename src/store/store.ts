import { ICharacter } from '@lib'

export const createCharactersStore = () => {
  return {
    characters: [] as ICharacter[],
    setCharacters(_characters: ICharacter[]) {
      this.characters = _characters
    },
    addCharacters(_characters: ICharacter[]) {
      this.characters.push(..._characters)
    }
  }
}
