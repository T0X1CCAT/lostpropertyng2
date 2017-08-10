export interface IItem{
  _id: string;
  itemName: string,
  itemDescription: string,
  itemCategory: {_id : string, name:string, name_case_insensitive:string, __v:number},
  itemLocation: string,
  itemDate: Date,
  listedDate: Date,
  itemTime: Date,
  itemLostOrFound: string,
  located:Boolean //it has been found
}