
json.set! 'article' do

  json.set! @article.id do
    json.extract! @article, :id, :title, :topic, :body,  :author_id, :created_at
    json.author_name @article.author.name

    json.num_claps @article.claps.count

    # json.comments @comments
  end
end

json.set! 'comments' do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :parent_id, :created_at
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




