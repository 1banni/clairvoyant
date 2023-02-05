# want all users to have same structure in frontend store

# json.articles do
  # loops through article
@articles.each do |article|
  # sets another key, but it's a dynamic key (article.id)
  json.set! article.id do
    # value has to match key when doing extract
    # also creates keys/value pairs based on pre-existing columns
    json.extract! article, :id, :title, :topic, :body,  :author_id, :created_at

    if article.photos
      json.imageUrls article.photos.map { |file| url_for(file) }
    end
    # json.imageUrls article.photos.map { |file| url_for(file) }
    # equivalent to above
    # json.title article.title

    json.author_name article.author.name

    json.num_bookmarks article.bookmarks.count

    # json.num_claps article.claps.count

  end
end







