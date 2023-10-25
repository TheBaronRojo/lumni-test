import IJobOfferDto from "@application/models/IJobOfferDto";


export default function jobOfferDtoStatusForHumans(dto: IJobOfferDto): { text: string, color: string } {
  const expiration = dto.expiresAt == null ? null : new Date(dto.expiresAt);
  if (expiration !== null && expiration < new Date()) {
    return {
      text: "Vencida",
      color: "#a0a0a0",
    };
  }
  if (dto.isApprovedForPublication) {
    return {
      text: "Publicada",
      color: "green",
    }
  } else {
    return {
      text: "Sin publicar",
      color: "orange",
    };
  }
}
