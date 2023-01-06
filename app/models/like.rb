# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liked      :integer          not null
#  author     :integer          not null
#  article    :integer          not null
#  author_id  :bigint
#  article_id :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :liked, :author_id, :article_id, presence: true
  validates :liked, numericality: { in: -1..1 }

  belongs_to :article
  belongs_to :user

end
