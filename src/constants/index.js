export const menuItems = [
    // Vegetarian (Main Course)
    {
    name: "Greek Salad",
    description: "Fresh salad with cucumbers, tomatoes, olives, and feta cheese.",
    price: "₹125",
    category: "Main Course",
    subCategory: "Vegetarian",
    image: "https://i.imgur.com/RtKIlLk.jpeg",
    quantity: "200g",
    nutrients: { protein: 4, carbs: 10, fats: 7 }
    },
    {
    name: "Mushroom Risotto",
    description: "Creamy rice cooked with mushrooms and Parmesan cheese.",
    price: "₹230",
    category: "Main Course",
    subCategory: "Vegetarian",
    image: "https://i.imgur.com/iKzJ63Z.jpeg",
    quantity: "250g",
    nutrients: { protein: 8, carbs: 45, fats: 12 }
    },
    {
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil.",
    price: "₹299",
    category: "Main Course",
    subCategory: "Vegetarian",
    image: "https://i.imgur.com/489sWSI.jpeg",
    quantity: "400g",
    nutrients: { protein: 12, carbs: 60, fats: 15 }
    },
    {
    name: "Penne Arrabbiata",
    description: "Pasta in spicy tomato garlic sauce.",
    price: "₹250",
    category: "Main Course",
    subCategory: "Vegetarian",
    image: "https://www.giallozafferano.com/images/260-26061/Penne-all-arrabbiata_1200x800.jpg",
    quantity: "350g",
    nutrients: { protein: 10, carbs: 55, fats: 8 }
    },
    {
    name: "Vegetable Lasagna",
    description: "Layered pasta with veggies, ricotta, and cheese.",
    price: "₹320",
    category: "Main Course",
    subCategory: "Vegetarian",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg",
    quantity: "450g",
    nutrients: { protein: 15, carbs: 70, fats: 18 }
    },
    
    // Non-Vegetarian (Main Course)
    {
    name: "Grilled Chicken Breast",
    description: "Juicy grilled chicken breast served with sautéed veggies.",
    price: "₹350",
    category: "Main Course",
    subCategory: "Non-Vegetarian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpy00P1laaOiH3FH1oCWKtH8BMse2DYIdNA&s",
    quantity: "300g",
    nutrients: { protein: 40, carbs: 5, fats: 10 }
    },
    {
    name: "BBQ Pork Ribs",
    description: "Tender pork ribs coated in smoky BBQ sauce.",
    price: "₹550",
    category: "Main Course",
    subCategory: "Non-Vegetarian",
    image: "https://www.allrecipes.com/thmb/IWVelWahUb2gQxixWJC2N-HXp0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-2x1-210-e799db142f594b00bb317bb357d0971c.jpg",
    quantity: "500g",
    nutrients: { protein: 50, carbs: 15, fats: 35 }
    },
    {
    name: "Lobster Thermidor",
    description: "Creamy lobster dish baked with cheese.",
    price: "₹700",
    category: "Main Course",
    subCategory: "Non-Vegetarian",
    image: "https://www.allrecipes.com/thmb/r4smJXjq4boMyoTX00UaMTwBcpM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-87386-Lobster-Thermidor-DDMFS-4x3-3d182e9ac5ac494fbbb44787cd80fdad.jpg",
    quantity: "400g",
    nutrients: { protein: 45, carbs: 10, fats: 25 }
    },
    
    // Non-Alcoholic Beverages
    {
    name: "Berry Smoothie",
    description: "Blend of mixed berries, yogurt, and honey.",
    price: "₹220",
    category: "Beverage",
    subCategory: "Non-Alcoholic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhS0Zhc_vp-3WypQ3uLmMulzGlblwiEK9Eg&s",
    quantity: "350ml",
    nutrients: { protein: 4, carbs: 50, fats: 2 }
    },
    {
    name: "Lemon Iced Tea",
    description: "Refreshing tea with a hint of lemon.",
    price: "₹150",
    category: "Beverage",
    subCategory: "Non-Alcoholic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAlwSaIh7fUD8R-YF-7s0VKs-EU3gqLMp1A&s",
    quantity: "300ml",
    nutrients: { protein: 0, carbs: 25, fats: 0 }
    },
    {
    name: "Espresso",
    description: "Strong Italian coffee shot.",
    price: "₹120",
    category: "Beverage",
    subCategory: "Non-Alcoholic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjyHlkViXf1t9FlpAnmlozT9DZSvPbFi-Lg&s",
    quantity: "60ml",
    nutrients: { protein: 0, carbs: 2, fats: 0 }
    },
    {
    name: "Cappuccino",
    description: "Rich coffee with steamed milk foam.",
    price: "₹180",
    category: "Beverage",
    subCategory: "Non-Alcoholic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-Bw696xHgriG1Sz9qVWsffiJtZH2PDWxpw&s",
    quantity: "250ml",
    nutrients: { protein: 6, carbs: 12, fats: 5 }
    },
    {
    name: "Mojito",
    description: "Refreshing lime and mint mocktail.",
    price: "₹200",
    category: "Beverage",
    subCategory: "Non-Alcoholic",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg",
    quantity: "300ml",
    nutrients: { protein: 0, carbs: 30, fats: 0 }
    },
    
    // Alcoholic Beverages
    {
    name: "Red Wine",
    description: "Classic French red wine.",
    price: "₹450",
    category: "Beverage",
    subCategory: "Alcoholic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzzGrk_YvjAdb9sIp-bXWUDtyfdjqAxFxvw&s",
    quantity: "150ml",
    nutrients: { protein: 0, carbs: 4, fats: 0 }
    },
    {
    name: "Whiskey Sour",
    description: "Whiskey-based cocktail with citrus notes.",
    price: "₹500",
    category: "Beverage",
    subCategory: "Alcoholic",
    image: "https://blog-distiller.imgix.net/wp-content/uploads/2018/08/24143617/whiskeysourADOBE-1200x600.jpg?w=1200&h=600",
    quantity: "200ml",
    nutrients: { protein: 0, carbs: 5, fats: 0 }
    },
    {
    name: "Margarita",
    description: "Tequila-based cocktail with lime and salt.",
    price: "₹480",
    category: "Beverage",
    subCategory: "Alcoholic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqoxGXlonpeeFLTozPMnY1gA2vgZfMdlL6A&s",
    quantity: "250ml",
    nutrients: { protein: 0, carbs: 10, fats: 0 }
    },
    
    // Desserts
    {
    name: "Red Velvet Cake",
    description: "Moist red velvet cake with cream cheese frosting.",
    price: "₹280",
    category: "Dessert",
    image: "https://www.allrecipes.com/thmb/gDJ1S6ETLfWGyyWw_4A_IGhvDYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9295_red-velvet-cake_ddmfs_4x3_1129-a8ab17b825e3464a9a53ceeda54ff461.jpg",
    quantity: "200g",
    nutrients: { protein: 6, carbs: 55, fats: 18 }
    },
    {
    name: "Panna Cotta",
    description: "Silky Italian custard with berry compote.",
    price: "₹260",
    category: "Dessert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwErMb_bvzt3WgrmGlrLhtkYM36syUc3Siew&s",
    quantity: "180g",
    nutrients: { protein: 7, carbs: 40, fats: 12 }
    },
    {
    name: "Tiramisu",
    description: "Italian coffee-flavored dessert with mascarpone.",
    price: "₹320",
    category: "Dessert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbKMWvt1_GuwGDFCF0VBM_uI3_pAUQL3tyw&s",
    quantity: "200g",
    nutrients: { protein: 6, carbs: 50, fats: 18 }
    },
    {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten core.",
    price: "₹290",
    category: "Dessert",
    image: "https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg",
    quantity: "180g",
    nutrients: { protein: 5, carbs: 45, fats: 20 }
    },
    {
    name: "Creme Brulee",
    description: "Classic French custard with caramelized sugar top.",
    price: "₹280",
    category: "Dessert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHE_ukU_1c-c1T-PyhXrmu3J-KTWnpugbwA&s",
    quantity: "170g",
    nutrients: { protein: 7, carbs: 40, fats: 15 }
    }
    ];