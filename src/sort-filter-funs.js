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
          parseFloat(new Date(b.released).getDate() ) - parseFloat(new Date(b.released).getDate())
      ));
    case "highdiscount":
      return (prod = data.sort(
        (a, b) => parseFloat(b.discount) - parseFloat(a.discount)
      ));
    default:
      return prod;
  }
};

export const FilterFun = (data, priceMax, category, condition, rating ) => {
  let prod = data;
  if (priceMax) {
    prod = prod.filter((product) => product.price <= priceMax);
  }
  // category
  let categoryArr = [];
  let categories = Object.keys(category);
  for (let i = 0; i < categories.length; i++) {
    if (category[categories[i]]) {
      categoryArr.push(categories[i]);
    } else {
      if (categoryArr.includes(categories[i])) {
        categoryArr = categoryArr.filter((catg) => catg !== categories[i]);
      }
    }
  }

  prod =
    categoryArr.length !== 0
      ? prod.filter((product) => categoryArr.includes(product.category))
      : prod;

  // Filtering by condition
  if (condition !== null) {
    prod = prod.filter((product) => product.condition === condition);
  }

  // Filtering by rating
  prod = prod.filter((product) => product.rating > Number(rating));

  return prod;
};
