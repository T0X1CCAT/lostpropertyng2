export interface IItem{
  itemName: string,
  itemDescription: string,
  itemCategory: string,
  itemLocation: string,
  itemDate: Date,
  listedDate: Date,
  itemTime: string,
  itemLostOrFound: string,
  located:Boolean //it has been found
}