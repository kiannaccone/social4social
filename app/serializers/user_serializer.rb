class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :bio, :image

  has_many :following_user

  # has_many :followed_user

end
