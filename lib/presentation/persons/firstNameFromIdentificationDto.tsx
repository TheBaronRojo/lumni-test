import IIdentificationInfoDto from "@application/models/IIdentificationInfoDto";
import capitalizeFirstLetter from "@presentation/texts/capitalizeFirstLetter";

export default function firstNameFromIdentificationDto(
    idendificationInfo: IIdentificationInfoDto
): string {

    const { firstName, middleName, lastName } = idendificationInfo;
    const names = [firstName, middleName, lastName]
    const nameFirst = names.filter(x => x === firstName)
    const nameFirstString = nameFirst.join(" ")

    return nameFirstString;
}

