json.set! @article.id do
  json.extract! @article, :id, :title, :topic, :body,  :author_id, :created_at
  json.author_name @article.author.name

  json.num_claps @article.claps.count
end

