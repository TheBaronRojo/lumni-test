import OneTimePasswordEntity from "./OneTimePasswordEntity";
import UserEntity from "./UserEntity";

describe(OneTimePasswordEntity.name, () => {

  test("Should invalidate different password", async () => {
    const password = "123456";
    const user = UserEntity.factory("skjdasdadasd");
    const otp = OneTimePasswordEntity.factory(
      "sakjdaskhdasd",
      { user, password }
    );

    const passwordIsValid = await otp.validatePassword("8asdjh");

    expect(passwordIsValid).toBe(false);
  });

  test("Should invalidate equals password", async () => {
    const password = "123456";
    const user = UserEntity.factory("skjdasdadasd");
    const otp = OneTimePasswordEntity.factory(
      "sakjdaskhdasd",
      { user, password }
    );

    const passwordIsValid = await otp.validatePassword(password);

    expect(passwordIsValid).toBe(true);
  });

});
