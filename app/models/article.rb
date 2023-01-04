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
  validates :liked, numericality: { in: -1..1 }

end
