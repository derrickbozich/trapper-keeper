class User < ApplicationRecord
  validates_presence_of :name, :email, :password_digest
  # validates :email, uniqueness: true

  #encrypt password
  has_secure_password

  has_many :expenses
  has_many :items
  has_many :carts
  has_many :shows
end
