json.set! @article.id do
    json.extract! @article, :id, :title, :author_id, :body
end
