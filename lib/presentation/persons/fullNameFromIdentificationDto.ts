import IIdentificationInfoDto from "@application/models/IIdentificationInfoDto";
import capitalizeFirstLetter from "@presentation/texts/capitalizeFirstLetter";

export default function fullNameFromIdentificationDto(
  idendificationInfo: IIdentificationInfoDto
): string {

  const { firstName, middleName, lastName } = idendificationInfo;
  const names = [firstName, middleName, lastName]
    .join(" ").split(" ")
    .filter(x => x !== null && x.trim() !== "")
    .map(x => capitalizeFirstLetter(x!));

  const fullName = names.join(" ");
  return fullName;
}
