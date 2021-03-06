class User < ApplicationRecord
  has_secure_password
  has_many :secrets
  validates :email, :username, presence: true
  validates :email, :username, uniqueness: true

  # Should this be refactored/moved to a serializer?
  def user_serializer
    {
      username: username,
      email: email,
      id: id
    }
  end
end
