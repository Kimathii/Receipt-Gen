import companies from "../data/companies";

// helper: random integer
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// helper: pick random array item
const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const generateOrderNumber = () => {
  return `#${getRandomInt(10000, 99999)}`;
};

const formatDate = () => {
  const now = new Date();
  return now.toLocaleString();
};

const generateItems = (menu) => {
  const itemCount = getRandomInt(2, 5);
  const selectedItems = [];

  for (let i = 0; i < itemCount; i++) {
    const menuItem = getRandomItem(menu);
    const quantity = getRandomInt(1, 3);

    selectedItems.push({
      name: menuItem.name,
      price: menuItem.price,
      quantity,
      total: menuItem.price * quantity
    });
  }

  return selectedItems;
};

const calculateSubtotal = (items) => {
  return items.reduce((sum, item) => sum + item.total, 0);
};

const generateReceipt = () => {
  const company = getRandomItem(companies);
  const address = getRandomItem(company.addresses);
  const items = generateItems(company.menu);
  const subtotal = calculateSubtotal(items);

  // simple tax simulation (10%)
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return {
    company: company.name,
    slogan: company.slogan,
    phone: company.phone,
    address,
    orderNumber: generateOrderNumber(),
    date: formatDate(),
    items,
    subtotal: subtotal.toFixed(2),
    total: total.toFixed(2)
  };
};

export default generateReceipt;
