# want all users to have same structure in frontend store

# json.articles do
  # loops through article
@articles.each do |article|
  # sets another key, but it's a dynamic key (article.id)
  json.set! article.id do
    # value has to match key when doing extract
    # also creates keys/value pairs based on pre-existing columns
    json.extract! article, :id, :title, :topic, :body,  :author_id, :created_at
    # equivalent to above
    # json.title article.title

    json.author_name article.author.name

    json.num_bookmarks article.bookmarks.count

    # json.num_claps article.claps.count

    # if @user
    #   json.user_like_status article.likers.include?(@user)
    #   json.user_bookmark_status article.bookmarkers.include?(@user)
    #   json.bookmarkId = article.bookmarks.select{|bookmark| bookmark.user_id == @user.id}
    #   json.bookmarks = article.bookmarks
    # else
    #   logger.info "blah else"
    #   json.user_like_status 'false'
    #   json.user_bookmark_status 'false'
    # end
  end
end







