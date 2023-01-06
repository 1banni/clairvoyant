json.set! @article.id do
    json.extract! @article, :id, :title, :body, :topic, :author_id
    # likes
    # comments
    # bookmarks
    #
    # json.author do
    #     json.username @article.author.username
    #     json.email @article.author.email
    # end
end
