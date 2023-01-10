class RenameLikesTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :likes, :claps
  end
end
