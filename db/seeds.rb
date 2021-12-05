puts "Deleteing previous data..."
Comment.destroy_all
User.destroy_all
Post.destroy_all

puts "🌱 Seeding..."
puts "👤 Creating users..."
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2)
    image: "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
  )


puts "🖥️ Creating posts..."
50.times do
  Post.create(
    content: Faker::Twitter.status, 
    like: rand(1-15), 
    user_id: User.all.sample.id
  )


puts "📝 Creating comments..."
40.times do 
  AdoptionApplication.create(
    body: Faker::Marketing.buzzwords,  
    user_id: User.all.sample.id,  
    post_id: Post.all.sample.id  
  )
end

puts "✅ Done seeding!"