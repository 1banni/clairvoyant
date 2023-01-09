json.set! @bookmark.article_id do
  json.extract! bookmark, :id, :user_id, :article_id
end




