import SkillType from "@domain/models/SkillType";

export default interface ISkillDto {
  id: string;
  normalizedName: string;
  isSelectableForEmploymentProfile: boolean;
  type: SkillType;
  name: string;
}
