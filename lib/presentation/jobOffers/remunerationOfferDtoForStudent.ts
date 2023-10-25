import IRemunerationOfferDto from "@application/models/IRemunerationOfferDto";


export default function remunerationOfferForStudent(
  offer: IRemunerationOfferDto,
  locale: string = 'es-CO'
): string {

  const currencyFormater = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: offer.currency.isoCode,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const salaryMin = offer.rangeStart && currencyFormater.format(offer.rangeStart);
  const salaryMax = offer.rangeTop && currencyFormater.format(offer.rangeTop);
  let salaryRange: string;

  if (salaryMin && salaryMax) {
    salaryRange = `${salaryMin} - ${salaryMax.replace(/[DOARUSCLPMXNE\$]/gi, '').trim()}`;
  }
  else if (salaryMin) {
    salaryRange = `Desde ${salaryMin}`;
  }
  else if (salaryMax) {
    salaryRange = `Hasta ${salaryMax}`;
  }
  else {
    salaryRange = "A convenir";
  }
  return salaryRange;
}
