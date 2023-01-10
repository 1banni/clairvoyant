json.set! @article.id do
  json.extract! @article, :id, :title, :topic, :body,  :author_id, :created_at
  json.author @article.author
end

