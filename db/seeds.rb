puts "Deleteing previous data..."
Comment.destroy_all
User.destroy_all
Post.destroy_all
Follow.destroy_all

puts "🌱 Seeding..."
puts "👤 Creating users..."
User.create(
  email: Faker::Internet.free_email,
  username: Faker::GreekPhilosophers.name,
  password_digest: Faker::Internet.user('password'),
  bio: Faker::GreekPhilosophers.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Internet.user('username'),
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Quote.famous_last_words,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Books::Dune.character,
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Books::Dune.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::DcComics.villain,
  password_digest: Faker::Internet.user('password'),
  bio: Faker::TvShows::AquaTeenHungerForce.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::DcComics.heroine,
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Movie.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::DcComics.hero,
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Superhero.power,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::ProgrammingLanguage.creator,
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Hacker.say_something_smart,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Book.author,
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Books::Dune.saying,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Fantasy::Tolkien.character, 
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Fantasy::Tolkien.poem,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Games::Witcher.character, 
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Games::Witcher.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::TvShows::DrWho.character, 
  password_digest: Faker::Internet.user('password'),
  bio: Faker::TvShows::DrWho.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Katherine'),
  username: 'Storm Blast', 
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Movies::HarryPotter.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Garrett'),
  username: 'garrett_gun_loaded', 
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Games::WorldOfWarcraft.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Kameron'),
  username: 'kamkam85', 
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Movies::Lebowski.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Katelyn'),
  username: 'kitkat', 
  password_digest: Faker::Internet.user('password'),
  bio: Faker::Movies::PrincessBride.quote,
  image: Faker::Avatar.image
)


puts "🖥️ Creating posts..."
20.times do
  Post.create(
    content: Faker::TvShows::NewGirl.quote, 
    like: rand(1-15), 
    user_id: User.all.sample.id
  )
end
20.times do
  Post.create(
    content: Faker::TvShows::MichaelScott.quote, 
    like: rand(1-15), 
    user_id: User.all.sample.id
  )
end
20.times do
  Post.create(
    content: Faker::Movies::HitchhikersGuideToTheGalaxy.quote, 
    like: rand(1-15), 
    user_id: User.all.sample.id
  )
end
20.times do
  Post.create(
    content: Faker::TvShows::Friends.quote, 
    like: rand(1-15), 
    user_id: User.all.sample.id
  )
end


puts "📝 Creating comments..."
30.times do 
  Comment.create(
    body: Faker::Quote.most_interesting_man_in_the_world,  
    user_id: User.all.sample.id,  
    post_id: Post.all.sample.id  
  )
end


puts "👥 Creating follows..."
15.times do
  Follow.create(
    follower_id: User.all.sample.id,  
    followed_id: User.all.sample.id
  )
end

puts "✅ Done seeding!"