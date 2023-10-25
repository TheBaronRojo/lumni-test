import { resolveClass } from "@container";
import NamesNormalizationServices from "./NamesNormalizationServices";

describe("NamesNormalizationServices", () => {

  const services = resolveClass(NamesNormalizationServices);

  test("normalize should use Capital letters", () => {
    const rawName = "this is my raw name";

    const normalizedName = services.normalize(rawName);

    expect(normalizedName).toBe(normalizedName.toUpperCase());
  });

  test("normalize should replace spaces with only one _", () => {
    const rawName = "this \n\r  is my   \n raw name";

    const normalizedName = services.normalize(rawName);
    const dashesCount = normalizedName.match(/_/g)?.length ?? 0;
    
    expect(dashesCount).toBe(4);
  });

  test("normalize should trim init and end spaces", () => {
    const rawName = " raw name ";

    const normalizedName = services.normalize(rawName);
    const dashesCount = normalizedName.match(/_/g)?.length ?? 0;
    
    expect(dashesCount).toBe(1);
  });

});
