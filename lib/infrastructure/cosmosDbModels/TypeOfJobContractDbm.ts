/* WARNING: DO NOT CHANGE THESE VALUES 
  because it causes inconsistency for previously saved values in the database 
*/
export const TypeOfJobContractDbmValues = [
  "indefiniteTerm", 
  "fixedTerm", 
  "provisionOfServices", 
  "specificProjecOrService"
] as const;
// --------------------------------------------------

type TypeOfJobContractDbm = typeof TypeOfJobContractDbmValues[number];
export default TypeOfJobContractDbm;
