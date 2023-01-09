class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.references :user, foreign_key: true, null: false
      t.references :article, foreign_key: true, null: false

      t.timestamps
    end
    add_index :bookmarks, [:user_id, :article_id], unique: true
  end
end
