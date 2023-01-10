# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Article.destroy_all
  Bookmark.destroy_all
  Clap.destroy_all
  Comment.destroy_all
  # ChatgptQuery.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  # ApplicationRecord.connection.reset_pk_sequence!('articles')
  # ApplicationRecord.connection.reset_pk_sequence!('chatgptqueries')
  # TODO - clean this up
  puts 'Resetting id sequences...'

  %w(users articles claps bookmarks comments).each do |table_name|
    ApplicationRecord.connection.reset_pk_sequence!(table_name)
  end

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:

  user_test = User.create!(
    username: 'test',
    name: 'Test User',
    email: 'test@gmail.com',
    password: 'iuhiuh'
  )

  user_william = User.create!(
    username: 'williB',
    name: 'William B.',
    email: 'william@gmail.com',
    password: 'iuhiuh'
  )

  user_demo = User.create!(
    username: 'demo',
    name: 'Demo User',
    email: 'demo@demo.com',
    password: 'password'
  )

  # More users
  10.times do
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      name: Faker::Internet.name,
      email: Faker::Internet.unique.email,
      password: 'password'
    })
  end

  puts "Creating articles..."
  seed_topics = [
    'Movies',
    'Books',
    'Shows',
    'Music',
    'Coding',
    'Home',
    'DIY',
    'Recipes',
  ]


  article2 = Article.create!(
    title: 'Avatar Animation Explained',
    body: 'lorem ipsum...',
    topic: 'Movies',
    author: user_william
  )

  article3 = Article.create!(
    title: 'Unity vs. Unreal',
    body: 'lorem ipsum...',
    topic: 'Gaming',
    author: user_demo
  )

  article29 = Article.create!(
    title: 'Five Easy Vegan Recipes',
    blurb: 'Explore five easy vegan meals packed with flavor and nutrition',
    body: '1. Lentil and Vegetable Curry: This dish is a hearty and flavorful way to enjoy a vegan meal on a budget. To make it, cook lentils in a saucepan with some water and spices such as curry powder, cumin, and coriander. Next, add diced vegetables such as potatoes, carrots, and bell peppers, and continue to simmer until the vegetables are tender. Serve the curry over rice or with naan bread for a complete meal. This dish is easy to make, packed with nutrients and can also be served as leftovers.\n2. Vegan Black Bean Tacos: These vegan tacos are a simple and delicious way to enjoy a plant-based meal. To make them, heat up some oil in a pan and sauté diced onion, garlic and diced bell peppers. Then add a can of drained and rinsed black beans and a tablespoon of taco seasoning. Cook until heated through. Serve the black bean mixture in warm corn tortillas with your favorite taco toppings such as shredded lettuce, diced tomatoes, and avocado or salsa.\n3. Vegan Pasta with Spinach and Tomatoes: This dish is perfect for a quick and easy weeknight dinner. To make it, cook pasta according to package instructions, and then sauté some diced tomatoes and spinach in a pan with garlic and olive oil. Toss the pasta with the spinach and tomatoes, and add some vegan parmesan or nutritional yeast to give it some cheesy flavor. This dish is easy to make, healthy, and delicious. \n4. Vegan Fried Rice: This dish is a easy, tasty, and affordable vegan meal. To make it, cook rice according to package instructions and set aside. In a pan or wok heat some oil and sauté diced vegetables such as carrots, peas, and onions. Add diced firm tofu and cook until browned. Add in the cooked rice and stir fry for a few minutes. Add in your choice of seasoning and soy sauce. This dish is a simple and delicious way to get your daily dose of veggies. \n5. Vegan lentil and sweet potato stew : This is a comforting, easy and budget-friendly meal that is perfect for colder days. To make it, heat some oil in a pot and sauté diced onion and garlic. Add in diced sweet potatoes, canned diced tomatoes, and vegetable broth, and bring the mixture to a simmer. Cook until the sweet potatoes are tender. Add in some rinsed lentils and cook until they are tender. Add any additional seasonings of your choice like cumin and coriander. This dish is a great source of protein and also easy to make. \nIn conclusion, these five vegan recipes are all cheap, easy to make and delicious. They all make use of common pantry items and a minimal number of ingredients. These meals are versatile and can be easily adjusted according to the ingredients you have on hand. These vegan meals are perfect for busy weeknights, and they will save you time and money on food expenses. They are also a great way to introduce more plant-based options in your diet without breaking the bank.',
    topic: 'Recipes',
    author: user_test
  )

  article30 = Article.create!(
    title: 'Why Tailwind CSS is overtaking Bootstrap',
    blurb: '',
    body: 'Tailwind CSS is a highly popular and widely used utility-first CSS framework that allows developers to easily and quickly create custom, responsive user interfaces. Tailwind provides a vast array of pre-defined CSS classes, which developers can use to quickly and easily create custom styles for their web projects.\nOne of the greatest benefits of Tailwind is its emphasis on utility-first design. Unlike traditional CSS frameworks that provide a set of pre-designed components that developers can use, Tailwind provides low-level utility classes that can be composed to create custom designs. This allows developers to have fine-grained control over the look and feel of their projects, and make it easier for teams to build consistent and cohesive design systems.\nAnother major advantage of Tailwind is its responsive design capabilities. The framework includes a large number of classes that are automatically responsive, making it easy for developers to create projects that look great on any screen size. This is especially useful in today\'s world where people access the web on a wide variety of devices, from small smartphones to large desktop monitors. \nTailwind also includes a number of advanced features that make it a powerful tool for creating user interfaces. For example, it includes a rich set of text and typography classes that make it easy to create beautiful and visually pleasing typography. It also includes classes for creating spacing and layout, which can be used to create a variety of different layouts and designs.\nOne of the best things about Tailwind is that it is highly customizable. The framework is built with a powerful configuration system that allows developers to customize it to suit their specific needs. This means that developers can easily create custom design systems that reflect the look and feel of their brand, while still taking advantage of the powerful capabilities provided by the framework.\nTailwind is also highly modular and lightweight. The framework is built using PostCSS, which allows developers to only include the parts of the framework that they need for their project. This means that developers can create lightweight and fast-loading web projects that are optimized for performance.\nTailwind is highly compatible with modern front-end development tools, such as React and Vue.js. It is also works well with popular CSS preprocessors like Sass and Less, which means that developers can easily use it in conjunction with other development tools.\nThe framework has a active and helpful community. They are providing documentations, video tutorials, blog posts, and many more resources to help the developers with their issues. They are always ready to help you in the community forums and other platforms like slack and github, which means that developers never feel alone when working with Tailwind.\nThe documentation of Tailwind is one of the best among the frameworks. They have provided detailed and clear instructions on how to use every feature of the framework. The documentation is easy to understand and follow, which makes it easy for developers to learn and use the framework.\nIn conclusion, Tailwind CSS is a highly powerful and versatile utility-first CSS framework that offers a wide array of features and capabilities for creating custom user interfaces. With its emphasis on utility-first design, responsive capabilities, advanced features, and high customizability, it is an ideal tool for creating visually pleasing and highly functional web projects. Additionally, its compatibility with modern front-end development tools, lightweight and modular design, and active and helpful community, Tailwind stands out as one of the most popular and widely used CSS frameworks available today.',
    topic: 'Coding',
    author: user_test
  )


  30.times do
    Article.create!({
      title: Faker::Lorem.sentence(word_count: rand(2..12)).chomp('.'),
      body: Faker::Lorem.paragraphs(number: rand(3..15)).join('\n'),
      topic: seed_topics.sample(),
      author: user_william
    })
  end


  puts "Creating bookmarks..."
  bookmark1 = Bookmark.create!(
    article: article29,
    user: user_william
  )

  bookmark2 = Bookmark.create!(
    article: article29,
    user: user_test
  )

  bookmark3 = Bookmark.create!(
    article: article29,
    user: user_demo
    )

  bookmark4 = Bookmark.create!(
    article: article2,
    user: user_test
  )

  puts "Creating comments..."



  puts "Creating claps..."
  clap1 = Clap.create!(
    article: article29,
    user: user_demo
  )

  clap2 = Clap.create!(
    article: article2,
    user: user_demo
  )


  puts "Done!"
end



