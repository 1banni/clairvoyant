class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :liked, :author, :article, null: false
      t.references :author, index: true, foreign_key: { to_table: :users }
      t.references :article, index: true, foreign_key: true

      t.timestamps
    end
  end
end
