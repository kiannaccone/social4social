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
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::GreekPhilosophers.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Internet.username,
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Quote.famous_last_words,
  image: Faker::Fillmurray.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Books::Dune.character,
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Books::Dune.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::DcComics.villain,
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::TvShows::AquaTeenHungerForce.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::DcComics.heroine,
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Movie.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::DcComics.hero,
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Superhero.power,
  image: Faker::LoremPixel.image(size: "50x60", is_gray: false, category: 'people')
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::ProgrammingLanguage.creator,
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Hacker.say_something_smart,
  image: Faker::Fillmurray.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Book.author,
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Books::Dune.saying,
  image: Faker::LoremPixel.image(size: "50x60", is_gray: false, category: 'people')
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Fantasy::Tolkien.character, 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Fantasy::Tolkien.poem,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::Games::Witcher.character, 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Games::Witcher.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email,
  username: Faker::TvShows::DrWho.character, 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::TvShows::DrWho.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Katherine'),
  username: 'Storm Blast', 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Movies::HarryPotter.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Garrett'),
  username: 'garrett_gun_loaded', 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Games::WorldOfWarcraft.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Kameron'),
  username: 'kamkam85', 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Movies::Lebowski.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'Katelyn'),
  username: 'kitkat', 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Movies::PrincessBride.quote,
  image: Faker::Avatar.image
)
User.create(
  email: Faker::Internet.free_email(name: 'eevill'),
  username: 'evil_kam', 
  password_digest: Faker::Internet.password(min_length: 5, max_length: 20),
  bio: Faker::Movies::Lebowski.quote,
  image: Faker::LoremPixel.image(size: "50x60", is_gray: false, category: 'cats')
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