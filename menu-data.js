const RESTAURANT_DATA = {
  locations: [
    {
      name: "Biddeford",
      address: "26 Alfred St, Biddeford, Maine 04005",
      phones: [
        { label: "(207) 283-0077", href: "tel:+12072830077" },
        { label: "(207) 282-5600", href: "tel:+12072825600" }
      ],
      map: "https://www.google.com/maps/search/?api=1&query=26+Alfred+St+Biddeford+ME+04005",
      hours: [
        ["Tuesday to Thursday", "11:00 AM to 9:00 PM"],
        ["Friday and Saturday", "11:00 AM to 9:30 PM"],
        ["Sunday", "11:00 AM to 9:00 PM"],
        ["Monday", "Closed"]
      ]
    },
    {
      name: "Waterville",
      address: "104 Main St, Waterville, Maine 04901",
      phones: [{ label: "(207) 872-0331", href: "tel:+12078720331" }],
      map: "https://www.google.com/maps/search/?api=1&query=104+Main+St+Waterville+ME+04901",
      hours: [
        ["Tuesday to Thursday", "11:00 AM to 9:00 PM"],
        ["Friday and Saturday", "11:00 AM to 9:30 PM"],
        ["Sunday", "11:00 AM to 9:00 PM"],
        ["Monday", "Closed"]
      ]
    }
  ]
};

const MENU_DATA = [
  {
    category: "Appetizers",
    subtitle: "Traditional Soups & Starters",
    items: [
      ["Coconut Soup", "4.95", "Shredded coconut, cream, and pistachio nuts."],
      ["Mulligatawny Soup", "4.95", "Lentils, split peas, mixed vegetables, and delicate herbs."],
      ["Vegetable Samosa", "6.95", "Two triangular pastries stuffed with spiced potatoes, green peas, and cilantro."],
      ["Pakora", "6.95", "Five fresh vegetable fritters, lightly spiced and deep fried."],
      ["Lovely Tikki", "6.95", "Two delicately spiced vegetable patties, a Punjab specialty."],
      ["Papadum", "6.95", "Punjabi lentil-flour wafers with black pepper and north Indian spices."],
      ["Rani Platter", "12.95", "A vegetarian assortment with tikki, samosa, gobi pakora, vegetable pakora, and papadum."],
      ["Chicken Tikka", "12.95", "Boneless marinated chicken barbecued in the Tandoor and served on lettuce."]
    ]
  },
  {
    category: "Breads",
    subtitle: "Roti Ghar Breads",
    items: [
      ["Nan", "4.95", "Soft leavened white-flour bread baked in the Tandoor."],
      ["Garlic Nan", "5.95", "Soft Tandoor-baked nan flavored with garlic."],
      ["Aloo Nan", "5.95", "Spiced potato-stuffed nan baked in the Tandoor."],
      ["Keema Nan", "5.95", "Soft bread stuffed with delicately spiced ground lamb."],
      ["Chicken Butter Nan", "6.95", "Bread stuffed with diced chicken breast."],
      ["Peshawari Nan", "6.95", "Sweet bread with coconut, almond flakes, raisins, pistachios, and fennel seeds."],
      ["Bread Sampler", "19.95", "Nan, aloo paratha, onion kulcha, poori, and papadum."],
      ["Cheese Nan", "6.95", "Special bread with cheese."],
      ["Mixed Vegetable Paratha", "6.95", "Layered bread with potatoes, peas, cauliflower, homemade cheese, herbs, and spices."],
      ["Lashaydar Paratha", "4.95", "Flaky layered whole-wheat bread sweetened with butter and cooked on a Tava."],
      ["Aloo Paratha", "6.95", "Layered whole-wheat bread filled with shredded potatoes and cooked on a Tava."],
      ["Onion Kulcha", "5.95", "Soft leavened bread stuffed with fresh and dehydrated onions."],
      ["Tandoori Roti", "4.95", "Whole-wheat bread baked in a Tandoor."],
      ["Chapati", "4.95", "Flat whole-wheat bread cooked on a special pan called a Tava."],
      ["Poori (Two Pieces)", "6.95", "Puffy deep-fried whole-wheat bread. Two pieces."]
    ]
  },
  {
    category: "Tandoori",
    subtitle: "Tandoori Specialties",
    items: [
      ["Tandoori Chicken", "16.95", "Spring chicken marinated in a prized recipe, broiled in the Tandoor, and served sizzling with sautéed onions."],
      ["Chicken Tikka", "16.95", "Boneless marinated chicken gently broiled in the Tandoor and served on greens."],
      ["Seikh Kebab", "18.95", "Ground lamb with fresh ginger, onion, and lemon juice."],
      ["Tandoori Shrimp", "21.95", "Shrimp broiled in the Tandoor and served sizzling with onions and bell peppers."],
      ["Mixed Grill", "24.95", "Chicken tikka, lamb kebab, seikh kebab, tandoori chicken, and tandoori shrimp."],
      ["Chef's Special Paneer Tikka", "24.95", "Homemade cottage cheese marinated, broiled in the Tandoor, and served with sautéed onions."]
    ]
  },
  {
    category: "Vegetarian",
    subtitle: "Vaishnau Bhojan Bhandar",
    items: [
      ["Golden Curry & Nav Rattenkorma", "15.95", "Fresh garden vegetables sautéed with herbs and spices."],
      ["Aloo Saag", "15.95", "Potatoes and spinach with fresh spices."],
      ["Bengan Bharta", "15.95", "Roasted eggplant sautéed with onions, green peas, and tomatoes."],
      ["Amaritsari Bhaji", "15.95", "Vegetable pakoras in a traditional Punjabi sauce with fruit and nuts."],
      ["Dal Makhni", "15.95", "Lentils flavored with spices and butter."],
      ["Aloo Mutter", "15.95", "Green peas and potatoes with fresh spices."],
      ["Khumb Mutter", "15.95", "Baby mushrooms and green peas with golden onions and Indian spices."],
      ["Channa Masala Punjabi", "15.95", "Chickpeas and potatoes in spiced gravy."],
      ["Mutter Paneer", "16.95", "Homemade cheese and garden peas lightly seasoned with herbs."],
      ["Kashmiri Malai Kofta", "16.95", "Minced vegetable balls in a rich mild gravy with nuts and cream."],
      ["Saag Paneer", "16.95", "Homemade cottage cheese in creamed spinach and spices."],
      ["Shahi Paneer", "16.95", "Homemade cottage cheese cooked with light cream, nuts, herbs, and spices."],
      ["Bombay Masala", "16.95", "Vegetable fritters simmered in a mild sauce with onions and tomatoes."],
      ["Saag Dal", "15.95", "Yellow lentils with ginger and garlic in a spinach sauce."]
    ]
  },
  {
    category: "Chicken",
    subtitle: "Bahar E Murg",
    items: [
      ["Chicken Curry", "16.95", "Boneless chicken cooked in a mildly spiced curry sauce."],
      ["Chicken Vindaloo", "17.95", "Boneless chicken in a hot spicy sauce with potatoes."],
      ["Chicken Dupiaza", "17.95", "Chicken cooked with light spices, spring onions, and pepper."],
      ["Chicken Saag", "17.95", "Boneless chicken in a creamed spinach sauce."],
      ["Chicken Korma (Badami)", "18.95", "A rich mild curry cooked with cream and nuts."],
      ["Chicken Mango", "18.95", "Boneless chicken sautéed with garlic, onion, ginger, mango sauce, and broccoli."],
      ["Chicken Tikka Masala", "18.95", "Boneless chicken sautéed with garlic, ginger, tomatoes, and a creamy spicy sauce."],
      ["Chicken Makhan Wala", "18.95", "Tandoori chicken cooked in tomato and butter sauce."],
      ["Chicken Chilli", "18.95", "Cubed chicken in a hot tomato sauce."]
    ]
  },
  {
    category: "Lamb",
    subtitle: "Gosht Laziz",
    items: [
      ["Lamb Curry", "24.95", "Tender lamb cubes in a medium-spiced gravy."],
      ["Lamb Rogan Josh", "25.95", "Lamb in a mild sauce with almonds, cashews, and raisins."],
      ["Lamb Vindaloo", "24.95", "Lamb in a hot spicy sauce with potatoes."],
      ["Lamb Janeman", "24.95", "Lamb in curry sauce with baby mushrooms."],
      ["Lamb Saag", "24.95", "Lamb in a light creamed spinach sauce."],
      ["Lamb Korma", "24.95", "Tender lamb in a rich sauce with nuts and cream."],
      ["Lamb Dupiaza", "24.95", "Thinly sliced lamb with spring onions and bell peppers."],
      ["Lamb Kebab Masala", "25.95", "Tandoor-broiled lamb sautéed in red wine and special curry."],
      ["Keema Mutter", "24.95", "Ground lamb cooked with peas and herbs."],
      ["Dehi Mutton", "24.95", "Lean lamb sautéed with ginger and onion in a low-fat yogurt sauce."],
      ["Lamb Mango", "25.95", "Lamb sautéed with garlic, onion, ginger, mango sauce, and broccoli."]
    ]
  },
  {
    category: "Seafood",
    subtitle: "Samunderi Duniya",
    items: [
      ["King Prawn", "20.95", "Large shrimp in spiced gravy with broccoli and green peas."],
      ["King Prawn Vindaloo", "21.95", "Shrimp cooked in a very hot and spicy sauce."],
      ["King Prawn Dupiaza", "21.95", "Shrimp cooked with onions and bell peppers."],
      ["King Prawn Saagwala", "21.95", "Shrimp in a creamed spinach sauce."],
      ["King Prawn Janeman", "21.95", "Shrimp in a baby mushroom sauce."],
      ["King Prawn Masala", "24.95", "Shrimp with tomatoes, bell peppers, and onions."],
      ["King Prawn Korma", "24.95", "Shrimp in a mild creamy curry with nuts."],
      ["Fish Korma", "24.95", "Fish cooked in a mild creamy curry with nuts."],
      ["Fish Tomato Curry", "24.95", "Fish with ginger and garlic in a thick gravy."],
      ["Fish Rogan Josh", "24.95", "Fish cooked in a mild rich creamy curry with nuts."]
    ]
  },
  {
    category: "Biryani",
    subtitle: "Jewel Biryani Rice Specialties",
    items: [
      ["Vegetable Biryani", "18.95", "Basmati rice with peas, cauliflower, carrots, peppers, broccoli, cottage cheese, cashews, and raisins."],
      ["Chicken Biryani", "19.95", "Boneless chicken cooked with Basmati rice, dried fruit, and nuts, garnished with egg."],
      ["Lamb Biryani", "24.95", "Lamb cooked with Basmati rice, dried fruit, and nuts."],
      ["King Prawn Biryani", "24.95", "Shrimp cooked with Basmati rice, dried fruit, and nuts."],
      ["Jewel Biryani for Two", "34.95", "Chef's special biryani with chicken, lamb, shrimp, and vegetables."]
    ]
  },
  {
    category: "Thali",
    subtitle: "Traditional Thali Dinners",
    items: [
      ["Rani Thali", "29.95", "Vegetarian platter with aloo sholay, mutter paneer, raita, Basmati rice, poori, papadum, dessert, tea or coffee."],
      ["Raja Thali", "34.95", "Chicken curry, lamb curry, tandoori chicken, Basmati rice, raita, poori, papadum, dessert, tea or coffee."],
      ["Seafood Thali", "34.95", "Mulligatawny soup with shrimp curry, fish tikka masala, rice, poori, papadum, dessert, tea or coffee."]
    ]
  },
  {
    category: "Desserts",
    subtitle: "Desserts",
    items: [
      ["Gulab Jaman", "5.00", "Sponge cheese balls soaked in honey syrup and rosewater."],
      ["Mango Ice Cream", "5.00", "Ice cream garnished with mango pulp."],
      ["Kulfee", "5.00", "Punjabi-style ice cream with pistachio and cashew."],
      ["Badami Kheer", "5.00", "Basmati rice cooked in milk with raisins, nuts, cardamom, and rosewater."],
      ["Rassmalai", "6.95", "Homemade Bengali cheese sponge in reduced milk with pistachios."]
    ]
  },
  {
    category: "Beverages",
    subtitle: "Beverages",
    items: [
      ["Masala Tea or Coffee", "2.00", ""],
      ["Soft Drinks", "2.95", "Pepsi, Diet Pepsi, Ginger Ale, Sierra Mist, Dr. Pepper, or iced tea."],
      ["Dud Wali Chai", "3.95", "Traditional Indian-style tea made with milk."],
      ["Poland Spring", "3.95", "Sparkling water from Maine."],
      ["Roo Afja", "5.95", "A refreshing sweet Indian drink."],
      ["Mango Lassi", "5.95", "Fresh yogurt blend with mango flavor."],
      ["Mango Milk Shake", "5.95", "Milk and mango ice cream garnished with rosewater."],
      ["Mango Juice", "5.95", ""]
    ]
  },
  {
    category: "Sides",
    subtitle: "Accompaniments & Side Dishes",
    items: [
      ["Mango Chutney", "5.00", "Imported relish."],
      ["Mixed Pickle", "5.00", "Imported mixed pickle."],
      ["Salad", "5.00", "Mixed greens with cucumbers, tomatoes, and choice of dressing."],
      ["Raita", "5.00", "Homemade yogurt with shredded cucumbers and cilantro."],
      ["Rice Pilau (Half)", "4.45", ""],
      ["Rice Pilau (Full)", "5.95", ""]
    ]
  },
  {
    category: "Lunch",
    subtitle: "Luncheon Specials • Served 11:00 AM to 3:00 PM",
    items: [
      ["Bengan Bhaji", "11.95", "Roasted eggplant sautéed with onions, peas, and tomatoes."],
      ["Kabli Chana", "11.95", "Chickpeas and potatoes in special gravy."],
      ["Mutter Aloo", "11.95", "Green peas and potatoes with fresh spices."],
      ["Aloo Palak", "11.95", "Potatoes and spinach with fresh spices."],
      ["Saag Pakora", "11.95", "Vegetable fritter with ginger, garlic, and spinach."],
      ["Bombay Masala", "11.95", "Vegetable fritters in a mild sauce with onions and tomatoes."],
      ["Sholay Bhatura", "12.95", "Chickpeas with deep-fried white-flour bread."],
      ["Zira Aloo", "12.95", "Spiced potatoes with cumin and plain paratha bread."],
      ["Guru's Vegetable Delight", "11.95", "Garden vegetables sautéed with herbs and spices."],
      ["Chicken Curry", "12.95", "Boneless chicken in curry sauce spiced to your liking."],
      ["Lamb Curry", "14.95", "Tender lamb sautéed in curry sauce spiced to your taste."],
      ["Prawn Curry", "12.95", "Baby shrimp in a delicate sauce spiced to your taste."],
      ["Fresh Tomato Curry", "14.95", "Fish with ginger and garlic in a thick gravy."]
    ]
  }
];
