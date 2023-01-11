class Rename < ActiveRecord::Migration[7.0]
  def change
    rename_table :chatgpt_queries, :chat
  end
end
