const categ = [
  {
    category: "Games",
    match: "games",
    type: "GAMES",
  },
  {
    category: "Console",
    match: "console",
    type: "CONSOLE",
  },
  {
    category: "Accesories",
    match: "accesories",
    type: "ACCESORIES",
  },
];
const user_rating = [
  {
    rating_category: "4-Star & above",
    val: 4,
  },
  {
    rating_category: "3-Star & above",
    val: 3,
  },
  {
    rating_category: "2-Star & above",
    val: 2,
  },
  {
    rating_category: "1-Star & above",
    val: 1,
  },
];

const conditions = [
  {
    cond: "Pre-owned",
    val: "pre-owned",
  },
  {
    cond: "New",
    val: "new",
  },
  {
    cond: "Pre-order",
    val: "pre-order",
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
    val: "lowtohigh",
  },
  {
    optionName: "High to Low",
    val: "hightolow",
  },
  {
    optionName: "New Arrival",
    val: "new_arive",
  },
  {
    optionName: "With High Discount",
    val: "highdiscount",
  },
];

const filter = {
  category: categ,
  user_rat: user_rating,
  condition: conditions,
  genre: genre,
  sortArr: sort,
};
export default filter;
