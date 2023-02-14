# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text
#  author_id  :bigint           not null
#  article_id :bigint           not null
#  parent_id  :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
  validates :body, :author_id, :article_id, presence: true

  belongs_to :author, class_name: :User, foreign_key: :author_id
  belongs_to :article
  belongs_to :parent, class_name: :Comment, optional: true
end
