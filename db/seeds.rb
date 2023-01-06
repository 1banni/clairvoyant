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
  # Article.destroy_all
  # ChatgptQuery.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  # ApplicationRecord.connection.reset_pk_sequence!('articles')
  # ApplicationRecord.connection.reset_pk_sequence!('chatgptqueries')
  # TODO - clean this up
  # puts 'Resetting id sequences...'\][]  # %w(actors movies castings).each do |table_name|
    # ApplicationRecord.connection.reset_pk_sequence!(table_name)
  # end

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:

  user_test = User.create!(
    username: 'test',
    name:'test user',
    email: 'test@gmail.com',
    password: 'iuhiuh'
  )

  user_william = User.create!(
    username: 'williB',
    name: 'William',
    email: 'william@gmail.com',
    password: 'iuhiuh'
  )

  user_demo = User.create!(
    username: 'demo',
    name: 'demo',
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
    'movies',
    'books',
    'shows',
    'music',
    'coding',
    'DIY',
    'recipes',
  ]

  Article.create!(
    title: 'best indie albums of the 90s',
    body: 'lorem ipsum...',
    topic: 'music',
    author: user_test
  )
  Article.create!(
    title: 'Avatar Animation Explained',
    body: 'lorem ipsum...',
    topic: 'movies',
    author: user_william
  )
  Article.create!(
    title: 'unity vs. unreal',
    body: 'lorem ipsum...',
    topic: 'gaming',
    author: user_demo
  )
  50.times do
    Article.create!({
      title: Faker::Lorem.sentence(word_count: rand(2..12)).chomp('.'),
      body: Faker::Lorem.paragraphs(number: rand(3..15)).join('\n'),
      topic: seed_topics.sample(),
      author: user_william
    })
  end

  puts "Done!"
end



