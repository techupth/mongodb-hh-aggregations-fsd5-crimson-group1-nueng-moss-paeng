// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      total_amount: { $sum: "$total_price" },
    },
  },
  { $match: { "_id.year": 2021 } },
  { $sort: { total_amount: 1 } },
  { $limit: 1 },
]);
