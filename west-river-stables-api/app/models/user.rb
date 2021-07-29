class User < ApplicationRecord
  has_secure_password
  has_many :secrets
  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true
end
