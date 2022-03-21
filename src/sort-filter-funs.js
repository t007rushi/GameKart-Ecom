export const SorterFun = (data, sortby) => {
  let prod = data;
  switch (sortby) {
    case "lowtohigh":
      return (prod = data.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      ));
    case "hightolow":
      return (prod = data.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      ));
    case "new_arive":
      return (prod = data.sort(
        (a, b) =>
          parseFloat(b.released.getDate()) - parseFloat(a.released.getDate())
      ));
    case "highdiscount":
      return (prod = data.sort(
        (a, b) => parseFloat(b.discount) - parseFloat(a.discount)
      ));
    default:
      return prod;
  }
};

export const FilterFun = (data, priceMax) => {
  let prod = data;
  if (priceMax) {
    prod = prod.filter((product) => product.price <= priceMax);
  }
  return prod;
};
