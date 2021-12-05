class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user, :belongs_to
  has_one :post
  has_one :comment
end
