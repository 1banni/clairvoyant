# == Schema Information
#
# Table name: bookmarks
#
#  id         :bigint           not null, primary key
#  bookmarked :boolean          not null
#  author_id  :bigint
#  article_id :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bookmark < ApplicationRecord
  validates :bookmarked, :author_id, :article_id, presence: true

  belongs_to :article
  belongs_to :user

end
