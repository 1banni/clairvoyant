json.set! @article.id do
  json.extract! @article, :id, :title, :topic, :body,  :author_id, :created_at
  json.author @article.author
end


  # json.num_claps @article.claps.count

  # if @user
  #   json.user_clap_status @article.clappers.include?(@user)
  #   json.user_bookmark_status @article.bookmarkers.include?(@user)
  # else
  #   logger.info "blah else"
  #   json.user_clap_status 'false'
  #   json.user_bookmark_status 'false'
  # end