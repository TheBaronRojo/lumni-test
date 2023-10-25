
export default interface ILoginIntentDbm {
  id: string;
  createdAt: number;
  updatedAt: number;
  discardedAt: number | null;
  userId: string;
  wasSuccess: boolean;
}
