import { isEmail } from "@domain/validation/valueValidators";
import { PropertyError } from "@domain/errors";

class JobOfferContactInfo {
  constructor(
    public readonly personId: string | null,
    public readonly fullName: string,
    public readonly cellphonePrefix: string | null,
    public readonly cellphoneNumber: string | null,
    public readonly email: string | null,
  ) { 
    if (email !== null && !isEmail(email)) {
      throw new PropertyError(this, "email", "Invalid email");
    }
  }
}

export default JobOfferContactInfo;
