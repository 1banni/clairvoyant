class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.string :categories, array: true, default: []
      t.references :author, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
