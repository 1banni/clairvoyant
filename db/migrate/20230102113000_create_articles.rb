class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title, index: true
      t.string :body, null: false
      t.references :author_id, index: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
