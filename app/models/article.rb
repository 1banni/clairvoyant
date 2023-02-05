# == Schema Information
#
# Table name: articles
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :bigint           not null
#  topic      :string           not null
#  blurb      :string
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Article < ApplicationRecord
  validates :title, :author_id, :topic, :body, presence: true

  belongs_to :author, class_name: :User, foreign_key: :author_id

  has_many_attached :photos
  has_many :claps, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  # has_many :comments, dependent: :destroy

  has_many :clappers, through: :claps, source: :user
  has_many :bookmarkers, through: :bookmarks, source: :user
  # has_many :commenters, through: :comments, source: :user

end
