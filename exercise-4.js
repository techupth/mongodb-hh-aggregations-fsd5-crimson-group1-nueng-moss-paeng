// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { $year: "$created_at" },
      total_amount: { $sum: "$total_price" },
    },
  },
  { $sort: { _id: -1 } },
]);
