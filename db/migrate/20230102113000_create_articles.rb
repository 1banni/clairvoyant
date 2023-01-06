class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.references :author, null: false, foreign_key: { to_table: :users }
      t.string :topic, null: false #array: true, default: []

      t.timestamps
    end
  end
end
