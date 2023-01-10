class RemoveLikesColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :claps, :liked
  end
end
