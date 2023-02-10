json.set! @comment.id do
  json.extract! @comment, :id, :body, :author_id, :article_id, :parent_id, :created_at
  json.author @comment.author
  json.author_photo_url url_for(@comment.author.photo) if @comment.author.photo.attached?
  json.author_name @comment.author.name
end