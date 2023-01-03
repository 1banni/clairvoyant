class CreateChatgptQueries < ActiveRecord::Migration[7.0]
  def change
    create_table :chatgpt_queries do |t|
      t.references :author_id, index: true, foreign_key: { to_table: :users }
      t.string :prompt, index: true
      t.string :response, null: false

      t.timestamps
    end
  end
end
