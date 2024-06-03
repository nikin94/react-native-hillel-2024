import { ICharacter } from '@lib'

export const createCharactersStore = () => {
  return {
    characters: [] as ICharacter[],
    setCharacters(_characters: ICharacter[]) {
      this.characters = _characters
    },
    addCharacters(_characters: ICharacter[]) {
      _characters.forEach(
        c =>
          this.characters.some(ch => ch._id === c._id) ||
          this.characters.push(c)
      )
    }
  }
}
