// from ex2  - ให้เขียน Query โดยมีรายละเอียดดังนี้
//     - หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size

// // ให้เขียน Query กรอง Document ที่ได้จาก **Exercise #2**
// ให้แสดงผลแค่ข้อมูลยอดขายทั้งหมดและจำนวนของ Pizza ใน Size medium

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amount: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $match: { _id: "medium" } },
]);
