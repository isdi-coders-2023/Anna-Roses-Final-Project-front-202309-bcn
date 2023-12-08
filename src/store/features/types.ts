export interface NeighbourStructure {
  _id: string;
  name: string;
  floor: string;
  door: string;
  coefficient: number;
  moneyInFavour: number;
  firstOwner: string;
  secondOwner: string;
  powers: string;
  activityKind: string;
  firstResidence: string;
  rented: string;
  numberOfResidents: number;
  yearOfPurchase: string;
  coments: string;
  image: string;
}

export interface NeighboursStateStructure {
  neighbours: NeighbourStructure[];
}

export type NeighbourWithoutId = Omit<NeighbourStructure, "_id">;
