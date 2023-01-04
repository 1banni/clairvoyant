# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liked      :integer          not null
#  author_id  :bigint
#  article_id :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
end
