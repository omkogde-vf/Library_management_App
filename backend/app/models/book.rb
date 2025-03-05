class Book < ApplicationRecord
  belongs_to :user
  validates :title, :author, :description, :publication_date, presence: true
end
