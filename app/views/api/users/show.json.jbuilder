# want all users to have same structure in frontend store
json.user do
  json.extract! @user, :id, :username, :name, :email, :created_at, :updated_at
  # json.photoUrl url_for(@user.photo)
  # json.photoUrl url_for(@user.photo)
  # p 'hello there'
  # QUESTION - what's happening here - why is it going inside of if block regardless
  # p 'QUESTION - what\'s happening here - why is it going inside of if block regardless'
  p '@user.photo'
  p @user.photo
  if @user.photo
    p 'inside if block'
    json.photoUrl url_for(@user.photo)
    # json.photoUrl @user.photo
    # p @photo_url
    # json.photoUrl @photo_url
    p 'after the break'
  end
end




































