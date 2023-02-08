# want all users to have same structure in frontend store
json.user do
  json.set! @user.id do
    json.extract! @user,
      :id, :username, :name, :email, :bio, :created_at, :updated_at

    json.photoUrl url_for(@user.photo) if @user.photo.attached?
  end
end



