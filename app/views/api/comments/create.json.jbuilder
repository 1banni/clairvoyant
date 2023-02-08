json.set! @comment.id do
  json.extract! @comment :id, :body, :user_id, :article_id, :parent_id
end