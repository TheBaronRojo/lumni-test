import {
  validateArrayProperty,
  validateBooleanProperty,
  validateDateProperty,
  validateIdProperty,
  validateModelProperty,
  validateNumberProperty,
  validateStringProperty,
  validateUrlStringProperty
} from "../validation/propertyValidators";
import { isInstanceOf, isString } from "../validation/valueValidators";
import IdiomLevelMatch from "./IdiomLevelMatch";
import EconomicSectorEntity from "./EconomicSectorEntity";
import RemunerationRange from "./RemunerationRange";
import SkillEntity from "./SkillEntity";
import TypeOfOffice from "./TypeOfOffice";

export type EmploymentInfoUpdates = Omit<Partial<EmploymentInfo>, "personId" | "createdAt" | "updatedAt">;

export default class EmploymentInfo {

  static factory(personId: string): EmploymentInfo {
    const value = new EmploymentInfo(
      personId,
      new Date(),
      new Date(),
      [],
      [],
      null,
      null,
      null,
      [],
      [],
      [],
      null,
      [],
      null,
      null,
      null,
      null,
    );
    value.validate();
    return value;
  }

  private readonly mutable: { -readonly [P in keyof EmploymentInfo]: EmploymentInfo[P] };

  constructor(
    public readonly personId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly complementaryTraining: string[],
    public readonly idioms: IdiomLevelMatch[],
    public readonly isAvailableToTravel: boolean | null,
    public readonly isAvailableToChangeResidence: boolean | null,
    public readonly monthsOfCertifiableExperience: number | null,
    public readonly skills: SkillEntity[],
    public readonly sectorsOfLaboralExperience: EconomicSectorEntity[],
    public readonly sectorsOfInterestForEmployment: EconomicSectorEntity[],
    public readonly remunerationRequirement: RemunerationRange | null,
    public readonly techSkills: string[],
    public readonly linkedInUrl: string | null,
    public readonly githubUrl: string | null,
    public readonly portfolioUrl: string | null,
    public readonly preferredTypeOfOffice: TypeOfOffice | null,
  ) {
    this.mutable = this;
  }

  update(updates: EmploymentInfoUpdates) {
    Object.assign(this, updates);
    this.validate();
    this.mutable.updatedAt = new Date();
  }

  validate() {
    validateIdProperty(this, "personId");
    validateDateProperty(this, "createdAt");
    validateDateProperty(this, "updatedAt");
    validateArrayProperty(this, "complementaryTraining", item => isString(item));
    validateArrayProperty(this, "idioms", item => isInstanceOf(IdiomLevelMatch, item));
    validateBooleanProperty(this, "isAvailableToTravel", { nullable: true });
    validateBooleanProperty(this, "isAvailableToChangeResidence", { nullable: true });
    validateNumberProperty(this, "monthsOfCertifiableExperience", { nullable: true });
    validateArrayProperty(this, "skills", item => isInstanceOf(SkillEntity, item));
    validateArrayProperty(this, "sectorsOfLaboralExperience", item => isInstanceOf(EconomicSectorEntity, item));
    validateArrayProperty(this, "sectorsOfInterestForEmployment", item => isInstanceOf(EconomicSectorEntity, item));
    validateModelProperty(this, RemunerationRange, "remunerationRequirement", { nullable: true });
    validateArrayProperty(this, "techSkills", item => isString(item));
    validateStringProperty(this, "linkedInUrl", { nullable: true });
    validateStringProperty(this, "githubUrl", { nullable: true });
    validateStringProperty(this, "portfolioUrl", { nullable: true });
    validateUrlStringProperty(this, "linkedInUrl", { nullable: true });
    validateUrlStringProperty(this, "githubUrl", { nullable: true });
    validateUrlStringProperty(this, "portfolioUrl", { nullable: true });
  }
}
