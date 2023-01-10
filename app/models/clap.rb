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
class Clap < ApplicationRecord
  validates :user_id, :article_id, presence: true

  belongs_to :article
  belongs_to :user

end
