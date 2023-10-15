
//Interfaces are custom data types for your app. "string" is a data type however we created a custom object data type called TestFullName
export interface FamilyName{
    id?:number;
    firstname?:string | null;
    lastname?:string | null;
}