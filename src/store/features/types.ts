export interface NeighbourStructure {
  _id: string;
  name: string;
  floor: string;
  door: string;
  coefficient: number;
  moneyInFavour: number;
  ownerFirst: string;
  ownerSecond: string;
  powers: string;
  activityKind: string;
  isFirstResidence: boolean;
  isRented: boolean;
  numberOfResidents: number;
  yearOfPurchase: number;
  coments: string;
  image: string;
}

export interface NeighboursStateStructure {
  neighbours: NeighbourStructure[];
}
