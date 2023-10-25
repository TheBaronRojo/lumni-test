/* WARNING: DO NOT CHANGE THESE VALUES 
  because it causes inconsistency for previously saved values in the database 
*/
export const TypeOfOfficeDbmValues = [
  "hybrid", 
  "presential",
  "remote",
] as const;
// --------------------------------------------------

type TypeOfOfficeDbm = typeof TypeOfOfficeDbmValues[number];
export default TypeOfOfficeDbm;
