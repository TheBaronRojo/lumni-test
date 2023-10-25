import loglevel from "loglevel";
loglevel.setLevel((process.env.LOG_LEVEL as any) ?? "WARN");

import "reflect-metadata";
import "class-transformer";
import { container, InjectionToken } from "tsyringe";

import JobOffersRepository from "@domain/repository/JobOffersRepository";
import JobOffersCosmosRepository from "@infrastructure/repositories/JobOffersRepositoryImplementation";
import UsersRepository from "@domain/repository/UsersRepository";
import UsersRepositoryImplementation from "@infrastructure/repositories/UsersRepositoryImplementation";
import PersonsRepository from "@domain/repository/PersonsRepository";
import PersonsRepositoryImplementation from "@infrastructure/repositories/PersonsRepositoryImplementation";


import LoginIntentsRepository from "@domain/repository/LoginIntentsRepository";
import LoginIntentsRepositoryImplementation from "@infrastructure/repositories/LoginIntentsRepositoryImplementation";

// Register repository implementations
if (process.env.NODE_ENV != "test") {
  container.registerType(PersonsRepository, PersonsRepositoryImplementation);
  container.registerType(JobOffersRepository, JobOffersCosmosRepository);
  container.registerType(UsersRepository, UsersRepositoryImplementation);
  container.register(LoginIntentsRepository, { useClass: LoginIntentsRepositoryImplementation });

  // Register service implementation
}

export function resolveClass<T>(token: InjectionToken<T>): T {
  return container.resolve(token);
}
