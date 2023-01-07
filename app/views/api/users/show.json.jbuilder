# want all users to have same structure in frontend store
json.user do
  json.extract! @user, :id, :username, :name, :email, :created_at, :updated_at
end




































