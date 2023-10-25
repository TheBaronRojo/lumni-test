import IExperienceMonthsRangeDto from "@application/models/IExperienceMonthsRangeDto";
import IOptionValue from "@presentation/optionsLists/IOptionValue";

const experienceTimeOptions: IOptionValue[] = [
  { value: "0-0", text: "Sin experiencia" },
  { value: "6-12", text: "De 6 meses a 1 año" },
  { value: "12-24", text: "De 1 a 2 años" },
  { value: "24-36", text: "De 2 a 3 años" },
  { value: "36-60", text: "De 3 a 5 años" },
  { value: "60-120", text: "De 5 a 10 años" },
  { value: "120-240", text: "De 10 a 20 años" },
];

export function experienceTimeOptionValueToNumberRange(value: string): IExperienceMonthsRangeDto {
  const [from, to] = value.split("-").map(x => +x);
  return { from, to };
}

export function numberRangeToExperienceTimeOptionValue(range: IExperienceMonthsRangeDto): string {
  return `${range.from}-${range.to}`;
}

export default experienceTimeOptions;
