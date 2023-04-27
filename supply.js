// Define the data for supplies and reorder levels
const suppliesData = [
    { name: "Pen", currentQuantity: 50, reorderLevel: 20 },
    { name: "Pencil", currentQuantity: 25, reorderLevel: 10 },
    { name: "Books", currentQuantity: 100, reorderLevel: 50 },
  ];
  
  // Create a table header
  const tableHeader = ["Supplies", "Current Quantity", "Reorder Level"];
  
  // Create an empty table body
  const tableBody = [];
  
  // Loop through the supplies data to create table rows
  for (const supply of suppliesData) {
    tableBody.push([supply.name, supply.currentQuantity, supply.reorderLevel]);
  }
  
  // Use console.table to display the table
  console.table(tableBody, tableHeader);
  