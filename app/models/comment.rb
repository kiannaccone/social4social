class Comment < ApplicationRecord
  belongs_to :post, dependent: :destroy
  belongs_to :user

  validates :body, length: { maximum: 50 }
end
