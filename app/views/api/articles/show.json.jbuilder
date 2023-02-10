
json.set! 'article' do
  json.set! @article.id do
    json.extract! @article, :id, :title, :topic, :body, :author_id, :created_at

    if @article.photos
      json.imageUrls @article.photos.map { |file| url_for(file) }
    end

    json.author @article.author
    json.author_photo_url url_for(@article.author.photo) if @article.author.photo.attached?
    json.author_name @article.author.name
    json.num_claps @article.claps.count
  end
end

if @comments
  json.set! 'comments' do
    @comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :article_id, :parent_id, :created_at
        json.author comment.author
        json.author_photo_url url_for(comment.author.photo) if comment.author.photo.attached?
        json.author_name comment.author.name
      end
    end
  end
end


# if @comments
#   p 'in json jbuilder show for comments'
#   p '-------------------------------------------------'
#   p @comments
# end

  # QUESTION COMMENTS - does this work?
  # json.set! comment.parent_id do
  #   json.extract! :id, :body, :author_id, :parent_id, :created_at
  # end




