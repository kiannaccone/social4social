class User < ApplicationRecord
    has_secure_password
    
    has_many :comments
    has_many :posts

    has_many :followed_users, foreign_key: :follower_id , class_name: "Follow"
    has_many :followed, through: :followed_users
    # first one you get all the follow instances where the instance of the user that you call that instance method on is the follower_id
    # followed gives you all the user instances that were the followed_id from followed users aka users you are following
        # followed gives you users you are following


    has_many :following_user, foreign_key: :followed_id, class_name: "Follow"
    has_many :followers, through: :following_user
    # following_user you get all the follow instances where the instance of the user that you call that instance method on is the followed_id
    # followers give you all the user instance that were the follower_id from following_users  aka users who follow you

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 4..24 }, on: :create
    validates :bio, presence: true, length: { maximum: 100 }
    validates :image, presence: true
end

