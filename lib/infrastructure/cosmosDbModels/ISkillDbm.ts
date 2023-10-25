
export type SkillTypeDbm = "hard" | "soft";

export default interface ISkillDbm {
  id: string;
  normalizedName: string;
  isSelectableForEmploymentProfile: boolean;
  type: SkillTypeDbm;
  name: string;
}
