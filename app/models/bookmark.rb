# == Schema Information
#
# Table name: bookmarks
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  article_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bookmark < ApplicationRecord
  validates :user_id, :article_id, presence: true
  validates :user_id, uniqueness: { scope: :article_id }

  belongs_to :article
  belongs_to :user
end
