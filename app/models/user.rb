class User < ApplicationRecord
    has_many :comments
    has_many :posts

    has_many :followed_users, foreign_key: :follower_id , class_name: "Follow"
    has_many :followed, through: :followed_users

    has_many :following_user, foreign_key: :followed_id, class_name: "Follow"
    has_many :followers, through: :following_user

end
