# want all users to have same structure in frontend store
@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :title, :description, :price, :seating, :lat, :lng
  end
end
