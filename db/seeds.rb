puts "Deleteing previous data..."
Comment.destroy_all
User.destroy_all
Post.destroy_all
Follow.destroy_all

puts "🌱 Seeding..."
puts "👤 Creating users..."
7.times do
  User.create(
    email: Faker::Internet.user('email'),
    username: Faker::Internet.user('username'),
    password_digest: Faker::Internet.user('password'),
    bio: Faker::Lorem.paragraph(sentence_count: 2),
    image: Faker::Avatar.image
  )
end

puts "🖥️ Creating posts..."
14.times do
  Post.create(
    content: Faker::Twitter.status, 
    like: rand(1-15), 
    user_id: User.all.sample.id
  )
end

puts "📝 Creating comments..."
4.times do 
  Comment.create(
    body: Faker::Marketing.buzzwords,  
    user_id: User.all.sample.id,  
    post_id: Post.all.sample.id  
  )
end

puts "Creating follows..."
  Follow.create(
    follower_id: User.first.id,  
    followed_id: User.last.id
  )
  Follow.create(
    follower_id: User.second.id,  
    followed_id: User.third.id
  )
  Follow.create(
    follower_id: User.fourth.id,  
    followed_id: User.fifth.id
  )

puts "✅ Done seeding!"