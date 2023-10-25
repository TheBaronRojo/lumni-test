
export default function dayOfWeekNumberToInitials(wd: number): string {
  switch (wd) {
    case 0:
      return "D";
    case 1:
      return "L";
    case 2:
      return "Ma";
    case 3:
      return "Mi";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    default:
      throw new Error(`Week day number ${wd} is not valid`);
  }
}