class AddIndexToClaps < ActiveRecord::Migration[7.0]
  def change
    add_index :claps, [:user_id, :article_id], unique: true
  end
end
