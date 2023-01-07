class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.integer :liked, null: false
      t.references :author, foreign_key: { to_table: :users }, null: false
      t.references :article, foreign_key: true, null: false

      t.timestamps
    end
  end
end
