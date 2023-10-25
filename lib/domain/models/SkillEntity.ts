import SkillType from "./SkillType";

export default class SkillEntity {
  constructor(
    public readonly id: string,
    public readonly normalizedName: string,
    public readonly isSelectableForEmploymentProfile: boolean,
    public readonly type: SkillType,
    public readonly name: string,
  ) {}
}
