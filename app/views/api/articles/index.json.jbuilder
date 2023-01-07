# want all users to have same structure in frontend store

# json.articles do
  # loops through article
@articles.each do |article|
  # sets another key, but it's a dynamic key (article.id)
  json.set! article.id do
    # value has to match key when doing extract
    # also creates keys/value pairs based on pre-existing columns
    json.extract! article, :id, :title, :topic, :body,  :author_id
    # equivalent to above
    # json.title article.title
    json.author_name article.author.name

    json.num_likes article.likes.select{|el| el == 1}.count
    json.num_dislikes article.likes.select{|el| el == -1}.count

    # debugger
    if @user
      json.user_like_status article.likers.include?(@user)
    else
      json.user_like_status @user
    end
  end

    # debugger

    # @user = current_user
    # json.likes do
    #   json.user_like_status article.likes.where(author_id: @user.id).count
    # end
end
# end



# probably want to know all of the users likes







