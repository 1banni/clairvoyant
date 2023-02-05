# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :string
#
class User < ApplicationRecord
  # VALIDATIONS
  validates :username,
    uniqueness: true,
    length: { in: 3..30 },
    format: { without: URI::MailTo::EMAIL_REGEXP, message: "can't be an email"}
  validates :email,
    uniqueness: true,
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token,
    presence: true,
    uniqueness: true
  validates :password,
    length: { in: 6..255, allow_nil: true }

  has_secure_password

  before_validation :ensure_session_token

  has_many :articles, class_name: :Article, foreign_key: :author_id, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  has_many :claps, dependent: :destroy
  has_many :comments, class_name: :Comment, foreign_key: :author_id, dependent: :destroy

  has_many :clapped_articles, through: :claps, source: :articles
  has_many :bookmarked_articles, through: :bookmarks, source: :articles

  has_one_attached :photo

  def self.find_by_credentials(credential, password)
    if (URI::MailTo::EMAIL_REGEXP.match(credential))
      user = User.find_by(email: credential)
    else
      user = User.find_by(username: credential)
    end

    user&.authenticate(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private
  def generate_unique_session_token
    loop do
      session_token = SecureRandom::urlsafe_base64
      return session_token unless User.exists?(session_token: session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
