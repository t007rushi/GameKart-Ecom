export const cartSummaryService = (cart) => {
  return cart.reduce(
    (acc, curr) => {
      acc = {
        ...acc,
        totalitem: Math.round(acc.totalitem + curr.qty),
        TotalPrice: Math.round(acc.TotalPrice + curr.qty * curr.price),
        Discount: Math.round(acc.Discount + curr.price * (curr.discount / 100)),
        TotalAmount: Math.round(
          acc.TotalAmount +
            curr.qty * curr.price -
            curr.price * (curr.discount / 100)
        ),
      };
      return acc;
    },
    {
      totalitem: 0,
      Discount: 0,
      TotalAmount: 0,
      TotalPrice: 0,
    }
  );
};
