class Post < ApplicationRecord
    belongs_to :user
    has_many :comments, dependent: :destroy

    validates :content, length: { maximum: 50 }
end
