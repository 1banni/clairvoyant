
# sets another key, but it's a dynamic key (@article.id)
json.set! @article.id do
  # value has to match key when doing extract
  # also creates keys/value pairs based on pre-existing columns
  json.extract! @article, :id, :title, :topic, :body,  :author_id, :created_at
  # equivalent to above
  # json.title @article.title

  json.author_name @article.author.name

  json.num_bookmarks @article.bookmarks.count

  json.num_likes @article.likes.select{|el| el == 1}.count
  json.num_dislikes @article.likes.select{|el| el == -1}.count

  if @user
    json.user_like_status @article.likers.include?(@user)
    json.user_bookmark_status @article.bookmarkers.include?(@user)
  else
    logger.info "blah else"
    json.user_like_status 'false'
    json.user_bookmark_status 'false'
  end
end
