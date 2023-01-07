class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.boolean :bookmarked, null: false
      t.references :author, foreign_key: { to_table: :users }
      t.references :article, foreign_key: true

      t.timestamps
    end
  end
end
