import IUserDbm from "@infrastructure/cosmosDbModels/IUserDbm";

export const dummyUsers: IUserDbm[] = [
  {
    id: "j7mVewRM1nnjuYPy48sCaQ",
    roles: [
      "staff"
    ],
    emailConfirmedAt: 1672444800000,
    email: "admin.user@lumni.net",
    passwordHash: "$2b$10$QG1Bx4kDBGkt/FR5as7B9.BsyoGLubbEAR8JbUWqTRze7UaNpEiSC",
    personId: "j7mVewRM1nnjuYPy48sCaQ"
  },
  {
    id: "hvxTiaJkQNGFdAG7aJBGdg",
    roles: [
      "student"
    ],
    emailConfirmedAt: 1672444800000,
    email: "student.user@lumni.net",
    passwordHash: "$2b$10$QG1Bx4kDBGkt/FR5as7B9.BsyoGLubbEAR8JbUWqTRze7UaNpEiSC",
    personId: "hvxTiaJkQNGFdAG7aJBGdg"
  }
];
