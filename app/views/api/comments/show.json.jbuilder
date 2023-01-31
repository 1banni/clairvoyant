json.set! @comment.id do
  json.extract! @comment, :id, :body, :author_id, :article_id, :parent_id, :created_at
  json.author_name @comment.author.name
end