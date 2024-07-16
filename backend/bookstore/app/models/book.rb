class Book < ApplicationRecord
 # belongs_to :user
 validates :title, :author, :description, :published_at, presence: true
end
