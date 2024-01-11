db.pizzaOrders.aggregate([
  {
    $group: { _id: "$credit_card_type", totalPrice: { $sum: "$total_price" } },
  },
]);
