export default interface ICharacter {
  id: number
  name: string
  image: string
  bio: IBio
  physicalDescription: IPhysicalDescription
  personalInformation: IPersonalInformation
  politicalInformation: IPoliticalInformation
  chronologicalInformation: IChronologicalInformation
}

export interface IBio {
  ages: string[]
  alternativeNames: string[]
  born: string
  died: string
  ethnicity: string
  nationality: string
}

export interface IPhysicalDescription {
  eyeColor: string
  gender: string
  hairColor: string
  skinColor: string
}

export interface IPersonalInformation {
  allies: string[]
  enemies: string[]
  fightingStyles: string[]
  loveInterst: string
  weaponsOfChoice: string[]
}

export interface IPoliticalInformation {
  affiliations: string[]
  position: string[]
  predecessor: string
  profession: string[]
  successor: string
}

export interface IChronologicalInformation {
  firstAppearance: string
  lastAppearance: string[]
  voicedBy: string[]
}
