class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.int :liked, null: false
      t.references :author, foreign_key: { to_table: :users }
      t.references :article, foreign_key: true

      t.timestamps
    end
  end
end
