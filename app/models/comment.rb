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

  # has_many :children, foreign_key: :parent_id, class_name: :Comment
  # has_many :children defines a method, so when you call Comment.first
  # you get an array of @comment.children_ids
  # include it in jbuilder, and in comments slice of state, you'll get
  # comments : { 1: {id: 1, body: 'hi', parentId: null, childrenIds }}
  # but, when deletoing comment, you would also have to remove corresponding id

  # one comment tree components (one per top level comment)
  # map through children

  # drafting articles. start with simple text area. after that, look at libraries
end
