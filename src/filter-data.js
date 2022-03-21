import { CATEGORY, CONDITION, RATING } from "./constant/filterConstant";

const categorydata = [
  {
    inputName: "Games",
    match: "games",
    val: "GAMES",
    inputType: "checkbox",
    type: "GAMES",
    name: "games",
  },
  {
    inputName: "Console",
    match: "console",
    val: "CONSOLE",
    inputType: "checkbox",
    type: "CONSOLE",
    name: "console",
  },
  {
    inputName: "Accesories",
    match: "accesories",
    val: "ACCESORIES",
    inputType: "checkbox",
    type: "ACCESORIES",
    name: "accesories",
  },
];
const user_rating = [
  {
    inputName: "4-Star & above",
    type: RATING,
    val: 4,
    inputType: "radio",
    name: "rating",
  },
  {
    inputName: "3-Star & above",
    type: RATING,
    val: 3,
    inputType: "radio",
    name: "rating",
  },
  {
    inputName: "2-Star & above",
    type: RATING,
    val: 2,
    inputType: "radio",
    name: "rating",
  },
  {
    inputName: "1-Star & above",
    type: RATING,
    val: 1,
    inputType: "radio",
    name: "rating",
  },
];

const conditions = [
  {
    inputName: "Pre-owned",
    type: CONDITION,
    val: "pre-owned",
    inputType: "radio",
    name: "condition",
  },
  {
    inputName: "New Games",
    type: CONDITION,
    val: "new",
    inputType: "radio",
    name: "condition",
  },
  {
    inputName: "Pre-order",
    type: CONDITION,
    val: "pre-order",
    inputType: "radio",
    name: "condition",
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

export { categorydata, user_rating, conditions, sort };
