# want all users to have same structure in frontend store
@chatgpt_queries.each do |chatgpt_query|
  json.set! chatgpt_query.id do
    json.extract! chatgpt_query, :id, :title, :description, :price, :seating, :lat, :lng
  end
end
