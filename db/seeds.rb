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
    email: 'test@gmail.com',
    password: 'iuhiuh'
  )

  user_william = User.create!(
    username: 'william',
    email: 'william@gmail.com',
    password: 'iuhiuh'
  )

  user_demo = User.create!(
    username: 'demo',
    email: 'demo@demo.com',
    password: 'password'
  )

  # More users
  10.times do
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    })
  end

  puts "Creating articles..."
  # TODO - create articles
  Article.create!(
    title: 'model view controller explained',
    body: 'lorem ipsum...',
    author: user_test
  )

  Article.create!(
    title: 'how to create user model with auth in rails',
    body: 'lorem ipsum...',
    author: user_william
  )

  Article.create!(
    title: 'rails generate user model with auth',
    body: 'lorem ipsum...',
    author: user_demo
  )

  puts "Done!"
end



