class User < ApplicationRecord
  has_secure_password
  has_many :secrets
  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true

  def user_serializer
    {
      username: user.username,
      email: user.email,
      id: user.id
    }
  end
end
