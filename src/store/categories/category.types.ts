export enum CATEGORIES_ACTION_TYPES {
  FATECH_CATEGORIES_START = "category/FATECH_CATEGORIES_START",
  FATECH_CATEGORIES_SUCCESS = "category/FATECH_CATEGORIES_SUCCESS",
  FATECH_CATEGORIES_FAILED = "category/FATECH_CATEGORIES_FAILED",
}
 
export type categoryItem = {
  id: number;
  imageUrl:string;
  name: string;
  price:number;

}

export type category = {
  tittle: string;
  imageUrl:string;
  items:categoryItem[];

}