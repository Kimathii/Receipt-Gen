const companies = [
  {
    name: "KFC",
    slogan: "Finger-Lickin' Good",
    phone: "(502) 874-8000",
    addresses: [
      "1441 Gardiner Lane, Louisville, KY 40213",
      "790 Eastern Pkwy, Louisville, KY 40217",
      "3520 Bardstown Rd, Louisville, KY 40218"
    ],
    menu: [
      { name: "Fried Chicken", price: 12.99 },
      { name: "Fries", price: 6.49 },
      { name: "Coleslaw", price: 4.99 },
      { name: "Mashed Potatoes", price: 5.99 },
      { name: "Coffee", price: 3.99 }
    ]
  },

  {
    name: "McDonald's",
    slogan: "I'm Lovin' It",
    phone: "(312) 555-0199",
    addresses: [
      "600 N Clark St, Chicago, IL 60654",
      "233 S Wacker Dr, Chicago, IL 60606",
      "105 E 42nd St, New York, NY 10017"
    ],
    menu: [
      { name: "Big Mac", price: 10.99 },
      { name: "Cheeseburger", price: 4.99 },
      { name: "Fries", price: 5.49 },
      { name: "McFlurry", price: 6.99 },
      { name: "Coffee", price: 3.49 }
    ]
  },

  {
    name: "Starbucks",
    slogan: "Brewed for Those Who Love Coffee",
    phone: "(206) 555-0123",
    addresses: [
      "1912 Pike Pl, Seattle, WA 98101",
      "102 Pike St, Seattle, WA 98101",
      "1200 5th Ave, Seattle, WA 98101"
    ],
    menu: [
      { name: "Caffè Latte", price: 6.99 },
      { name: "Cappuccino", price: 6.49 },
      { name: "Espresso", price: 4.99 },
      { name: "Blueberry Muffin", price: 5.49 },
      { name: "Croissant", price: 4.99 }
    ]
  }
];

export default companies;
