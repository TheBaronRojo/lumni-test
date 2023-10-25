
export const IsaGeneralStatusDbmValues = [
  "active" ,
  "ceded",
  "default",
  "expelled",
  "finalConciliation",
  "finalizedPayments",
  "inactive",
  "manualActivation",
  "outOfTheFound",
  "permanentDefault",
  "recoveredFromDefault",
  "retired",
] as const;

type IsaStatusDbm = typeof IsaGeneralStatusDbmValues[number];
export default IsaStatusDbm;
