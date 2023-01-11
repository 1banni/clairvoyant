# want all users to have same structure in frontend store
@chat.each do |chat|
  json.set! chat.id do
    json.extract! chat, :id, :title, :description, :price, :seating, :lat, :lng
  end
end
