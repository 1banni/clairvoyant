class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.boolean :bookmarked, null: false
      t.references :user, foreign_key: true, null: false
      t.references :article, foreign_key: true, null: false

      t.timestamps
    end
  end
end
