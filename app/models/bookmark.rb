# == Schema Information
#
# Table name: bookmarks
#
#  id         :bigint           not null, primary key
#  bookmarked :boolean          not null
#  user_id    :bigint           not null
#  article_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bookmark < ApplicationRecord
  validates :bookmarked, :user_id, :article_id, presence: true

  belongs_to :article
  belongs_to :user

end
