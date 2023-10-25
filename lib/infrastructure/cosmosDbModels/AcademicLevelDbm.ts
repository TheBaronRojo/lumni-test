/* WARNING: DO NOT CHANGE THESE VALUES 
  because it causes inconsistency for previously saved values in the database 
*/
export const AcademicLevelDbmValues = [
  "technical", 
  "tenogologist", 
  "professional", 
  "specialization", 
  "master"
] as const;
// --------------------------------------------------

type AcademicLevelDbm = typeof AcademicLevelDbmValues[number];
export default AcademicLevelDbm;
