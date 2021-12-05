# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all
Comment.destroy_all

puts " 👤 Seeding Users..."

# t.string :email
# t.string :username
# t.string :password_digest
# t.string :bio
# t.string :image

100.times do
    User.create(username: Faker::Twitter.screen_name, email: Faker::Twitter.user(include_email: true), image: Faker::Avatar.image, bio: Faker::Quote.famous_last_words )
end

puts "🧚 Seeding Posts..."

    100.times do
        Post.create(content: Faker::Twitter.status, like: rand(1..500))
    end

# t.string :content
# t.integer :like

puts "💃 Seeding Comments..."

    10.times do
        Comment.create(body: )

# t.string :body
# t.belongs_to :post, null: false, foreign_key: true
# t.string :user
# t.string :belongs_to
# t.belongs_to :comment, null: false, foreign_key: true

puts "✅ Done seeding!"


