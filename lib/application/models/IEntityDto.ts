export default interface IEntityDto {
  id: string;
  createdAt: string;
  updatedAt: string;
  discardedAt: string | null;
  isDicarded: boolean;
}
