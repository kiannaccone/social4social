class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :like

  belongs_to :user
end
