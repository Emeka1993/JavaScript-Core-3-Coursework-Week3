let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log("QTY" + "\t" + "ITEM" + "\t\t\t" + "TOTAL");
let totalCost = 0;
order.forEach(e => {console.log(`${e.quantity}\t${e.itemName}\t\t${e.unitPrice*e.quantity}`); 
totalCost = totalCost + e.unitPrice*e.quantity});
console.log("\nTotal: " + totalCost);