@articles.each do |article|
  # sets a dynamic key (article.id)
  json.set! article.id do
    json.extract! article, :id, :title, :topic, :body,  :author_id, :created_at

    if article.photos
      json.imageUrls article.photos.map { |file| url_for(file) }
    end

    json.author article.author
    json.author_name article.author.name
    json.author_photo_url url_for(article.author.photo) if article.author.photo.attached?
    json.num_bookmarks article.bookmarks.count
    json.num_claps article.claps.count
  end
end







