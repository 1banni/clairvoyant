class CreateChatgptQueries < ActiveRecord::Migration[7.0]
  def change
    create_table :chatgpt_queries do |t|
      t.string :prompt, index: true
      t.string :body, null: false
      t.references :author, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
