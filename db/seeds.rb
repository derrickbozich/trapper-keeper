vinyl = Item.create(name: 'Nostalgia For Infinity', price: 25, wholesale_price: 8, kind:'color')
vinyl2 = Item.create(name: 'The Twin', price: 25, wholesale_price: 8, kind:'black')
cart = Cart.create(date: Date.today.to_s, payment_type: 'cash')
cart2 = Cart.create(date: Date.today.to_s, payment_type: 'credit')
cart.items << vinyl
cart.items << vinyl2
cart2.items << vinyl
cart2.items << vinyl2
user = User.create(name: 'Sound of Ceres', email: 'soundofceres@gmail.com', password: 's1')
user.items << vinyl
user.items << vinyl2
user.carts << cart
user.carts << cart2
