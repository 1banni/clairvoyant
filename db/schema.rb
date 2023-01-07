# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_06_193018) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title", null: false
    t.string "topic", null: false
    t.text "body", null: false
    t.bigint "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_articles_on_author_id"
  end

  create_table "bookmarks", force: :cascade do |t|
    t.boolean "bookmarked", null: false
    t.bigint "author_id"
    t.bigint "article_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_bookmarks_on_article_id"
    t.index ["author_id"], name: "index_bookmarks_on_author_id"
  end

  create_table "chatgpt_queries", force: :cascade do |t|
    t.string "prompt"
    t.string "body", null: false
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_chatgpt_queries_on_author_id"
    t.index ["prompt"], name: "index_chatgpt_queries_on_prompt"
  end

  create_table "comments", force: :cascade do |t|
    t.text "body"
    t.bigint "author_id"
    t.bigint "article_id"
    t.bigint "comment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_comments_on_article_id"
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["comment_id"], name: "index_comments_on_comment_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liked", null: false
    t.bigint "author_id"
    t.bigint "article_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_likes_on_article_id"
    t.index ["author_id"], name: "index_likes_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "articles", "users", column: "author_id"
  add_foreign_key "bookmarks", "articles"
  add_foreign_key "bookmarks", "users", column: "author_id"
  add_foreign_key "chatgpt_queries", "users", column: "author_id"
  add_foreign_key "comments", "articles"
  add_foreign_key "comments", "users", column: "author_id"
  add_foreign_key "likes", "articles"
  add_foreign_key "likes", "users", column: "author_id"
end
