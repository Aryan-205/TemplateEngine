export const templates = {
  inventoryPage: {
    title: "Warehouse Stock",
    subtitle: "Real-time inventory levels",
    stats: [
      { label: "Total Items", value: "1,240", color: "blue" },
      { label: "Out of Stock", value: "12", color: "red" }
    ],
    tableHeaders: ["Item Name", "SKU", "Status"],
    tableData: [
      { name: "Widget A", sku: "W-123", status: "In Stock" },
      { name: "Gadget B", sku: "G-456", status: "Low" }
    ]
  },
  userManagement: {
    title: "User Directory",
    subtitle: "Manage your team members",
    stats: [
      { label: "Active Users", value: "45", color: "green" }
    ],
    tableHeaders: ["Name", "Role", "Last Login"],
    tableData: [
      { name: "John Doe", role: "Admin", login: "2 hours ago" }
    ]
  }
};