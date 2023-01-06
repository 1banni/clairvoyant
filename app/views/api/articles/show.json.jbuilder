json.set! @article.id do
    json.extract! article, :id, :title, :body, :topic, :author_id
end
