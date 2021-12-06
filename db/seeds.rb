puts "Deleteing previous data..."
Comment.destroy_all
User.destroy_all
Post.destroy_all
Follow.destroy_all

puts "🌱 Seeding..."
puts "👤 Creating users..."
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2),
    image: Faker::Avatar.image
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2),
    image: Faker::Avatar.image
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2),
    image: Faker::Avatar.image
  )
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2),
    image: Faker::Avatar.image
  )


puts "🖥️ Creating posts..."
5.times do
  Post.create(
    content: Faker::Twitter.status, 
    like: rand(1-15), 
    user_id: User.all.sample.id
  )


puts "📝 Creating comments..."
4.times do 
  AdoptionApplication.create(
    body: Faker::Marketing.buzzwords,  
    user_id: User.all.sample.id,  
    post_id: Post.all.sample.id  
  )
end

puts "Creating follows..."
  Follow.create(
    follower_id: ,  
    followd_id: 
  )
  Follow.create(
    follower_id: ,  
    followd_id: 
  )
  Follow.create(
    follower_id: ,  
    followd_id: 
  )
  Follow.create(
    follower_id: ,  
    followd_id: 
  )
end

puts "✅ Done seeding!"