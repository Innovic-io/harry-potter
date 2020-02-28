export interface IHouses {
  _id: string;
  name: string;
  mascot: string;
  headOfHouse: string;
  school: string;
  members: IMember[];
  houseGhost: string;
  founder: string;
}

export interface IMember {
  _id: string;
  name: string;
}
