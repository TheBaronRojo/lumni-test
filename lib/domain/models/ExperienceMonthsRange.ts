import { PropertyError } from "@domain/errors";

export default class ExperienceMonthsRange {
  constructor(
    public readonly from: number | null,
    public readonly to: number | null,
  ) {
    if (from !== null && from < 0) {
      throw new PropertyError(this, "from", "should be gretter or equals than 0");
    }
    if (from !== null && to !== null && to < from) {
      throw new PropertyError(this, "to", "should be gretter or equals than from");
    }
  }
}
