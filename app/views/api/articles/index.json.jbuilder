# want all users to have same structure in frontend store
@articles.each do |article|
  json.set! article.id do
    json.extract! article, :id, :title, :body, :topic, :author_id
  end
end
