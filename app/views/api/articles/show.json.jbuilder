json.set! @article.id do
  json.extract! @article, :id, :title, :topic, :body,  :author_id, :created_at
  json.author_name @article.author.name
end


  # json.num_likes @article.likes.select{|el| el == 1}.count
  # json.num_dislikes @article.likes.select{|el| el == -1}.count

  # if @user
  #   json.user_like_status @article.likers.include?(@user)
  #   json.user_bookmark_status @article.bookmarkers.include?(@user)
  # else
  #   logger.info "blah else"
  #   json.user_like_status 'false'
  #   json.user_bookmark_status 'false'
  # end