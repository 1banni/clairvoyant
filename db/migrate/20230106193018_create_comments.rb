class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :body
      t.references :author, index: true, foreign_key: { to_table: :users }
      t.references :article, index: true, foreign_key: true
      t.references :comment

      t.timestamps
    end
  end
end
