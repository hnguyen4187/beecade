class Game < ApplicationRecord
  has_many :points, dependent: :destroy
  has_many :users, through: :points
end
