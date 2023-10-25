import IEntityDto from "@application/models/IEntityDto";
import Entity from "@domain/models/Entity";

export default class EntityDtoMapper {

  entityToDto(entity: Entity<any>): IEntityDto {
    return {
      id: entity.id,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.createdAt.toISOString(),
      discardedAt: entity.discardedAt === null
        ? null
        : entity.discardedAt.toISOString(),
      isDicarded: entity.discardedAt !== null,
    }
  };
}
