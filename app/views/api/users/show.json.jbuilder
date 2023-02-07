# want all users to have same structure in frontend store
json.user do
  json.extract! @user, :id, :username, :name, :email, :created_at, :updated_at
  # json.photoUrl url_for(@user.photo)
  # json.photoUrl url_for(@user.photo)
  # p 'hello there'
  # QUESTION - what's happening here - why is it going inside of if block regardless
  # p 'QUESTION - what\'s happening here - why is it going inside of if block regardless'
  p '------------------------------------------------------------------------------'
  p '------------------------------------------------------------------------------'
  p '------------------------------------------------------------------------------'
  p 'views/api/users/show.json.jbuilder'
  p '@user.photo'
  p @user.photo
  p '@user.photo.attached?'
  p @user.photo.attached?
  if @user.photo.attached?
    json.photoUrl url_for(@user.photo)
    # json.photoUrl @user.photo
    # p @photo_url
    # json.photoUrl @photo_url
    p 'after the break'
  end
  p '------------------------------------------------------------------------------'
end




































