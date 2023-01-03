# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  price       :integer          not null
#  seating     :integer          default(2), not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Bench < ApplicationRecord
  validates :title, :description, :price, :seating, :lat, :lng, presence: true
  validates :price, numericality: { in: 10..1000 }
end
