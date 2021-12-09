class User < ApplicationRecord
    has_secure_password
    
    has_many :comments
    has_many :posts

    has_many :followed_users, foreign_key: :follower_id , class_name: "Follow"
    has_many :followed, through: :followed_users

    has_many :following_user, foreign_key: :followed_id, class_name: "Follow"
    has_many :followers, through: :following_user

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 4..24 }, on: :create
    validates :bio, presence: true, length: { maximum: 100 }
    validates :image, presence: true
end

