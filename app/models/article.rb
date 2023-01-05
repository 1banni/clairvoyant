# == Schema Information
#
# Table name: articles
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  categories :string           default([]), is an Array
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Article < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :likes, dependent: :destroy
  # has_many :comments, dependent: :destroy

  has_many :likers, through: :likes, source: :user
  # has_many :commenters, through: :comments, source: :user




end
