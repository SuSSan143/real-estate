const typeFilters =
  "Apartment -> 4|Townhouses -> 16|Villas -> 3|Penthouses -> 18|Hotel Apartments -> 21|Villa Compound -> 19|Residential Plot -> 14|Residential Floor -> 12|Residential Building -> 17|Office -> 5|Shop -> 6|Warehouse -> 7|Labour camp -> 9|Commercial Villa -> 25|Bulk Units -> 20|Commercial Plot -> 15|Commercial Floor -> 13|Commercial Building -> 10|Factory -> 8|Industrial Land -> 22|Mixed Use Land -> 23|Showroom -> 24|Other Commercial -> 11";

const typeFilterArray = typeFilters.split("|");

export const typeFilterOptions = typeFilterArray
  .map((type) => {
    const typeArray = type.split("->");
    return {
      type: typeArray[0],
      option: typeArray[1],
    };
  })
  .sort((a, b) => {
    return a.type > b.type ? 1 : -1;
  });

const rentFrequencyFilters = "monthly|yearly|weekly|daily";

export const rentFrequencyFilterArray = rentFrequencyFilters
  .split("|")
  .map((item) => item.trim());

const sortFilters =
  "price-desc|price-asc|city-level-score|date-desc|date-asc|verified-score";

export const sortFilterArray = sortFilters
  .split("|")
  .map((item) => item.trim());
