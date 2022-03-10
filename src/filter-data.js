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
    sortby: "select option",
    val: null,
  },
  {
    sortby: "Low to High",
    val: "lowtoHigh",
  },
  {
    sortby: "High to Low",
    val: "Hightolow",
  },
  {
    sortby: "New Arrival",
    val: "new_arrival",
  },
  {
    sortby: "With High Discount",
    val: "with_discount",
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
