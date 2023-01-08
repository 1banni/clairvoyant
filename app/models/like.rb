# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liked      :integer          not null
#  user_id    :bigint           not null
#  article_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
  validates :liked, :author_id, :article_id, presence: true
  validates :liked, numericality: { in: -1..1 }

  belongs_to :article
  belongs_to :user, class_name: :User, foreign_key: :author_id

end
