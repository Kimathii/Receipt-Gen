const companies = [
  {
    store: "Pet Food",
    name: "Tractor Supply Co",
    slogan: "For Life Out Here",
    phone: "(502) 874-8000",
    locations: [
      { address: "4331 Bardstown Rd, Louisville, KY 40218", state: "KY" },
      { address: "4000 Shelbyville Rd, Louisville, KY 40207", state: "KY" },
      { address: "201 S Hurstbourne Pkwy, Louisville, KY 40222", state: "KY" },
      { address: "1025 Veterans Pkwy, Clarksville, IN 47129", state: "IN" },
      { address: "757 E Lewis and Clark Pkwy, Clarksville, IN 47129", state: "IN" },
      { address: "3500 Grant Line Rd, New Albany, IN 47150", state: "IN" },
      { address: "3891 Truxel Rd, Sacramento, CA 95834", state: "CA" },
      { address: "1750 E Golf Rd, Schaumburg, IL 60173", state: "IL" },
      { address: "2700 E Fowler Ave, Tampa, FL 33612", state: "FL" },
      { address: "4101 Towne Center Dr, Louisville, KY 40241", state: "KY" }
    ],
    products: [
      { name: "Retriever High Protein Adult Dog Food (40 lb)", price: 34.99 },
      { name: "4health Original Adult Dog Food (35 lb)", price: 32.99 },
      { name: "Purina Pro Plan Sport Performance 30/20 (37.5 lb)", price: 68.99 },
      { name: "Nutrena Loyall Life Puppy Chicken & Brown Rice (30 lb)", price: 41.99 },
      { name: "Blue Seal Explorer Active Dog Food (50 lb)", price: 46.99 },
      { name: "Taste of the Wild High Prairie Canine Recipe (28 lb)", price: 55.99 },
      { name: "Diamond Naturals Large Breed Adult Dog Food (40 lb)", price: 44.99 },
      { name: "Tractor Supply Premium Puppy Training Pads (100 ct)", price: 24.99 },
      { name: "Petmate Sky Kennel Pet Carrier", price: 79.99 }
    ]
  },

  {
    store: "Electronics & Home",
    name: "Target",
    slogan: "Together we are a target",
    phone: "(407) 734-7200",
    locations: [
      { address: "450 S Orange Ave, Orlando, FL 32801", state: "FL" },
      { address: "800 N Magnolia Ave, Orlando, FL 32803", state: "FL" },
      { address: "9100 International Dr, Orlando, FL 32819", state: "FL" },
      { address: "25-01 Jackson Ave, Long Island City, NY 11101", state: "NY" },
      { address: "139 Flatbush Ave, Brooklyn, NY 11217", state: "NY" },
      { address: "255 Greenwich St, New York, NY 10007", state: "NY" },
      { address: "445 Albee Square W, Brooklyn, NY 11201", state: "NY" },
      { address: "112 W 34th St, New York, NY 10120", state: "NY" },
      { address: "600 Broadway, New York, NY 10012", state: "NY" },
      { address: "700 Exterior St, Bronx, NY 10451", state: "NY" }
    ],
    products: [
      { name: "Heyday USB-C Braided Charging Cable", price: 12.99 },
      { name: "Roku Express HD Streaming Media Player", price: 29.99 },
      { name: "Philips Sonicare DailyClean Toothbrush", price: 39.99 },
      { name: "Instant Pot 6-Quart 7-in-1 Pressure Cooker", price: 89.99 },
      { name: "Room Essentials 5-Shelf Bookcase", price: 40.0 },
      { name: "Threshold Cotton Bath Towel", price: 10.0 },
      { name: "Canon PIXMA Wireless Inkjet Printer", price: 69.99 },
      { name: "Energizer Max AA Batteries (20 ct)", price: 19.99 }
    ]
  },

  {
    store: "Health & Supplements",
    name: "The Vitamin Shoppe",
    slogan: "Everyone is deserving of good health",
    phone: "(203) 877-4281",
    locations: [
      { address: "150 E 42nd St, New York, NY 10017", state: "NY" },
      { address: "250 Summer St, Boston, MA 02210", state: "MA" },
      { address: "600 N Michigan Ave, Chicago, IL 60611", state: "IL" },
      { address: "731 Lexington Ave, New York, NY 10022", state: "NY" },
      { address: "860 Broadway, New York, NY 10003", state: "NY" },
      { address: "1440 Broadway, New York, NY 10018", state: "NY" },
      { address: "1740 Broadway, New York, NY 10019", state: "NY" },
      { address: "1100 Wilshire Blvd, Los Angeles, CA 90017", state: "CA" },
      { address: "300 Post St, San Francisco, CA 94108", state: "CA" },
      { address: "1818 Market St, Philadelphia, PA 19103", state: "PA" }
    ],
    products: [
      { name: "Pure Encapsulations Iron-C Capsules", price: 22.99 },
      { name: "Pure Encapsulations Curcumin 500 with BioPerine", price: 55.99 },
      { name: "Pure Encapsulations B-Complex Plus", price: 33.99 },
      { name: "Pure Encapsulations L-Theanine Capsules", price: 29.99 },
      { name: "Pure Encapsulations Alpha Lipoic Acid", price: 36.99 },
      { name: "Pure Encapsulations CoQ10 120 mg", price: 49.99 },
      { name: "Pure Encapsulations Vitamin C 1000 mg", price: 27.99 },
      { name: "Pure Encapsulations Selenium Capsules", price: 18.99 }
    ]
  },

  {
    store: "Coffee & Pantry",
    name: "Sam's Club",
    slogan: "Great brands. Members. Savings.",
    phone: "(888) 746-7726",
    locations: [
      { address: "1225 Concord Ave, Concord, CA 94520", state: "CA" },
      { address: "8250 Power Inn Rd, Sacramento, CA 95828", state: "CA" },
      { address: "7147 Greenback Ln, Citrus Heights, CA 95621", state: "CA" },
      { address: "2575 W Shaw Ave, Fresno, CA 93711", state: "CA" },
      { address: "150 E 42nd St, New York, NY 10017", state: "NY" },
      { address: "250 Summer St, Boston, MA 02210", state: "MA" },
      { address: "600 N Michigan Ave, Chicago, IL 60611", state: "IL" },
      { address: "7150 Regional St, Dublin, CA 94568", state: "CA" },
      { address: "1700 W Loop 1604 N, San Antonio, TX 78248", state: "TX" },
      { address: "10100 Sam's Cir, Baton Rouge, LA 70810", state: "LA" }
    ],
    products: [
      { name: "Member’s Mark Colombian Supremo Coffee (48 oz)", price: 16.98 },
      { name: "Dunkin’ Original Blend Ground Coffee (45 oz)", price: 18.48 },
      { name: "Swiss Miss Milk Chocolate Hot Cocoa Mix (50 ct)", price: 9.98 },
      { name: "Gatorade Thirst Quencher Variety Pack (28 ct)", price: 14.98 },
      { name: "La Croix Sparkling Water Variety Pack (24 ct)", price: 10.98 },
      { name: "Nestlé Coffee mate French Vanilla Creamer (64 oz)", price: 6.98 },
      { name: "Lipton Green Tea Bags (100 ct)", price: 11.98 }
    ]
  },

  {
    store: "Pet Supplies",
    name: "Petco",
    slogan: "Where the Healthy Pets Go",
    phone: "(877) 738-6742",
    locations: [
      { address: "860 Broadway, New York, NY 10003", state: "NY" },
      { address: "9910 Mission Gorge Rd, San Diego, CA 92120", state: "CA" },
      { address: "3040 N Broadway St, Chicago, IL 60657", state: "IL" },
      { address: "4295 Buckhead Loop NE, Atlanta, GA 30342", state: "GA" },
      { address: "2300 Walnut St, Philadelphia, PA 19103", state: "PA" },
      { address: "1441 Tamiami Trail, Port Charlotte, FL 33948", state: "FL" },
      { address: "200 W 57th St, New York, NY 10019", state: "NY" },
      { address: "1200 E Rand Rd, Arlington Heights, IL 60004", state: "IL" },
      { address: "7110 S Westnedge Ave, Portage, MI 49002", state: "MI" },
      { address: "2701 Ming Ave, Bakersfield, CA 93304", state: "CA" }
    ],
    products: [
      { name: "Wellness Complete Health Adult Deboned Chicken Dog Food (30 lb)", price: 64.99 },
      { name: "Merrick Grain-Free Texas Beef & Sweet Potato (25 lb)", price: 72.99 },
      { name: "Hill’s Science Diet Adult Large Breed Chicken (35 lb)", price: 69.99 },
      { name: "Petco Brand Retractable Dog Leash", price: 24.99 },
      { name: "Chuckit! Ultra Rubber Ball (2-pack)", price: 9.99 },
      { name: "Arm & Hammer Super Scoop Clumping Cat Litter (40 lb)", price: 19.99 },
      { name: "Greenies Original Dental Treats (36 oz)", price: 33.99 }
    ]
  },

    {
    store: "Eukanuba Pet Food",
    name: "Tractor Supply Co",
    slogan: "For Life Out Here",
    phone: "(502) 874-8000",
    locations: [
{ address: "4331 Bardstown Rd, Louisville, KY 40218", state: "KY" },
{ address: "4000 Shelbyville Rd, Louisville, KY 40207", state: "KY" },
{ address: "1025 Veterans Pkwy, Clarksville, IN 47129", state: "IN" },
{ address: "757 E Lewis and Clark Pkwy, Clarksville, IN 47129", state: "IN" },
{ address: "3500 Grant Line Rd, New Albany, IN 47150", state: "IN" },
{ address: "4600 Shelbyville Rd, Louisville, KY 40207", state: "KY" },
{ address: "201 S Hurstbourne Pkwy, Louisville, KY 40222", state: "KY" },
{ address: "3891 Truxel Rd, Sacramento, CA 95834", state: "CA" },
{ address: "1750 E Golf Rd, Schaumburg, IL 60173", state: "IL" },
{ address: "2700 E Fowler Ave, Tampa, FL 33612", state: "FL" }

    ],
    products: [
 { name: "Eukanuba Puppy Small Breed Fresh Chicken Dry Dog Food", price: 36.99 },
  { name: "Eukanuba Puppy Small/Medium Breed Lamb & Rice Dry Dog Food", price: 38.99 },
  { name: "Eukanuba Puppy Medium Breed Fresh Chicken Dry Dog Food", price: 39.99 },
  { name: "Eukanuba Puppy Large Breed Fresh Chicken Dry Dog Food", price: 42.99 },
  { name: "Eukanuba Adult Small Breed Fresh Chicken Dry Dog Food", price: 41.99 },
  { name: "Eukanuba Adult Small/Medium Breed Lamb & Rice Dry Dog Food", price: 43.99 },
  { name: "Eukanuba Adult Small/Medium Breed Salmon & Barley Dry Dog Food", price: 45.99 },
  { name: "Eukanuba Adult Medium Breed Fresh Chicken Dry Dog Food", price: 44.99 },
  { name: "Eukanuba Adult Large Breed Fresh Chicken Dry Dog Food", price: 47.99 },
  { name: "Eukanuba Adult Large Breed Lamb & Rice Dry Dog Food", price: 46.99 },
  { name: "Eukanuba Grain Free Adult Small/Medium Breed Chicken Dry Dog Food", price: 52.99 },
  { name: "Eukanuba Adult Small Bites Dry Dog Food", price: 40.99 },
  { name: "Eukanuba Adult Dry Dog Food for Medium Dogs", price: 42.99 }
    ]
  },
  
   {
    store: "Fast Food",
    name: "McDonald's",
    slogan: "I'm Lovin' It",
    phone: "(800) 244-6227",
    locations: [
      { address: "151 W 34th St, New York, NY 10001", state: "NY" },
      { address: "1650 Broadway, New York, NY 10019", state: "NY" },
      { address: "1600 W Lake St, Chicago, IL 60612", state: "IL" },
      { address: "600 N Clark St, Chicago, IL 60654", state: "IL" },
      { address: "121 S Orange Ave, Orlando, FL 32801", state: "FL" },
      { address: "5400 International Dr, Orlando, FL 32819", state: "FL" },
      { address: "1100 S Figueroa St, Los Angeles, CA 90015", state: "CA" },
      { address: "700 Exposition Park Dr, Los Angeles, CA 90037", state: "CA" },
      { address: "850 Market St, San Francisco, CA 94103", state: "CA" },
      { address: "901 N Point St, San Francisco, CA 94109", state: "CA" }
    ],
    products: [
      { name: "Big Mac Meal", price: 9.99 },
      { name: "Quarter Pounder with Cheese", price: 6.49 },
      { name: "10-Piece Chicken McNuggets", price: 5.99 },
      { name: "Filet-O-Fish Sandwich", price: 5.79 },
      { name: "Large French Fries", price: 3.99 },
      { name: "McChicken Sandwich", price: 2.99 },
      { name: "Egg McMuffin", price: 4.29 },
      { name: "Apple Pie", price: 1.89 }
    ]
  },

  {
    store: "Fast Food",
    name: "KFC",
    slogan: "It's Finger Lickin' Good",
    phone: "(800) 225-5532",
    locations: [
      { address: "165 W 42nd St, New York, NY 10036", state: "NY" },
      { address: "355 W 125th St, New York, NY 10027", state: "NY" },
      { address: "400 S State St, Chicago, IL 60605", state: "IL" },
      { address: "7537 S Cicero Ave, Chicago, IL 60652", state: "IL" },
      { address: "1100 W Hillsboro Blvd, Deerfield Beach, FL 33442", state: "FL" },
      { address: "7900 NW 27th Ave, Miami, FL 33147", state: "FL" },
      { address: "1810 W Sunset Blvd, Los Angeles, CA 90026", state: "CA" },
      { address: "4500 Crenshaw Blvd, Los Angeles, CA 90043", state: "CA" },
      { address: "2400 Telegraph Ave, Oakland, CA 94612", state: "CA" },
      { address: "8000 MacArthur Blvd, Oakland, CA 94605", state: "CA" }
    ],
    products: [
      { name: "2-Piece Fried Chicken Combo", price: 8.49 },
      { name: "8-Piece Original Recipe Bucket", price: 21.99 },
      { name: "Famous Bowl", price: 6.99 },
      { name: "Chicken Sandwich", price: 5.49 },
      { name: "Mashed Potatoes & Gravy", price: 2.79 },
      { name: "Cole Slaw", price: 2.79 },
      { name: "Extra Crispy Tenders (5 pc)", price: 7.99 }
    ]
  },

  {
    store: "Fast Casual",
    name: "Subway",
    slogan: "Eat Fresh",
    phone: "(800) 888-4848",
    locations: [
      { address: "1633 Broadway, New York, NY 10019", state: "NY" },
      { address: "291 W 34th St, New York, NY 10001", state: "NY" },
      { address: "17 N State St, Chicago, IL 60602", state: "IL" },
      { address: "233 S Wacker Dr, Chicago, IL 60606", state: "IL" },
      { address: "1215 International Dr, Orlando, FL 32819", state: "FL" },
      { address: "5400 S Orange Blossom Trl, Orlando, FL 32839", state: "FL" },
      { address: "800 Wilshire Blvd, Los Angeles, CA 90017", state: "CA" },
      { address: "1200 S Hope St, Los Angeles, CA 90015", state: "CA" },
      { address: "865 Market St, San Francisco, CA 94103", state: "CA" },
      { address: "1 Ferry Building, San Francisco, CA 94111", state: "CA" }
    ],
    products: [
      { name: "Footlong Italian B.M.T.", price: 9.99 },
      { name: "6-Inch Turkey Breast Sub", price: 5.99 },
      { name: "Footlong Tuna Sub", price: 9.49 },
      { name: "6-Inch Meatball Marinara", price: 5.49 },
      { name: "Chips & Drink Combo", price: 3.99 },
      { name: "Chocolate Chip Cookie", price: 1.29 }
    ]
  },

  {
    store: "Fast Food",
    name: "Burger King",
    slogan: "Have It Your Way",
    phone: "(866) 394-2493",
    locations: [
      { address: "110 W 42nd St, New York, NY 10036", state: "NY" },
      { address: "38 W 49th St, New York, NY 10020", state: "NY" },
      { address: "35 E Wacker Dr, Chicago, IL 60601", state: "IL" },
      { address: "203 N Michigan Ave, Chicago, IL 60601", state: "IL" },
      { address: "6000 Universal Blvd, Orlando, FL 32819", state: "FL" },
      { address: "900 International Dr, Orlando, FL 32819", state: "FL" },
      { address: "700 S Figueroa St, Los Angeles, CA 90017", state: "CA" },
      { address: "450 S Western Ave, Los Angeles, CA 90020", state: "CA" },
      { address: "845 Market St, San Francisco, CA 94103", state: "CA" },
      { address: "1600 Polk St, San Francisco, CA 94109", state: "CA" }
    ],
    products: [
      { name: "Whopper Sandwich", price: 6.99 },
      { name: "Whopper Meal", price: 10.49 },
      { name: "Original Chicken Sandwich", price: 5.79 },
      { name: "8-Piece Chicken Fries", price: 4.99 },
      { name: "Large Onion Rings", price: 3.99 },
      { name: "Hershey’s Sundae Pie", price: 2.49 }
    ]
  },

  {
    store: "Fast Casual",
    name: "Chipotle Mexican Grill",
    slogan: "Food With Integrity",
    phone: "(303) 595-4000",
    locations: [
      { address: "864 Broadway, New York, NY 10003", state: "NY" },
      { address: "114 W 47th St, New York, NY 10036", state: "NY" },
      { address: "1 S Dearborn St, Chicago, IL 60603", state: "IL" },
      { address: "316 S Michigan Ave, Chicago, IL 60604", state: "IL" },
      { address: "4200 Conroy Rd, Orlando, FL 32839", state: "FL" },
      { address: "730 Sand Lake Rd, Orlando, FL 32809", state: "FL" },
      { address: "680 S Figueroa St, Los Angeles, CA 90017", state: "CA" },
      { address: "1250 S La Brea Ave, Los Angeles, CA 90019", state: "CA" },
      { address: "865 Market St, San Francisco, CA 94103", state: "CA" },
      { address: "3251 20th Ave, San Francisco, CA 94132", state: "CA" }
    ],
    products: [
      { name: "Chicken Burrito Bowl", price: 10.45 },
      { name: "Steak Burrito", price: 11.95 },
      { name: "Chicken Tacos (3)", price: 9.85 },
      { name: "Vegetarian Bowl", price: 9.85 },
      { name: "Chips & Guacamole", price: 5.25 },
      { name: "Chips & Queso Blanco", price: 5.25 }
    ]
  }

];

export default companies;
