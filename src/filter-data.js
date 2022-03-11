const category = [
  {
    catg: "Games",
  },
  {
    catg: "Console",
  },
  {
    catg: "Accesories",
  },
];
const user_rating = [
  {
    rating_categ: "4-Star & above",
  },
  {
    rating_categ: "3-Star & above",
  },
  {
    rating_categ: "2-Star & above",
  },
  {
    rating_categ: "ALL",
  },
];

const conditions = [
  {
    cond: "Pre-owned",
  },
  {
    cond: "New",
  },
  {
    cond: "Pre-order",
  },
];

const genre = [
  {
    Genre: "Action",
  },
  {
    Genre: "Adventure",
  },
  {
    Genre: "Racing",
  },
  {
    Genre: "Sports",
  },
  {
    Genre: "Dance",
  },
  {
    Genre: "FPS",
  },
  {
    Genre: "Horror",
  },
];
const sort = [
  {
    optionName: "select option",
    val: null,
  },
  {
    optionName: "Low to High",
    val: "LOW_TO_HIGH",
  },
  {
    optionName: "High to Low",
    val: "HIGH_TO_LOW",
  },
  {
    optionName: "New Arrival",
    val: "NEW_ARRIVAL",
  },
  {
    optionName: "With High Discount",
    val: "WITH_DISCOUNT",
  },
];

const filter = {
  category: category,
  user_rat: user_rating,
  condition: conditions,
  genre: genre,
  sortArr: sort,
};
export default filter;
