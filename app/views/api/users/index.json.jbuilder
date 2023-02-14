@users.each do |user|
  json.set! user.id do
    json.extract! user,
      :id, :username, :name, :email, :bio, :created_at, :updated_at

    json.photo_url url_for(user.photo) if user.photo.attached?
  end
end



