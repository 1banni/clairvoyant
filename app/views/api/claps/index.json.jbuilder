@claps.each do |clap|
  json.set! clap.id do
    json.extract! clap, :id, :user_id, :article_id
  end
end


