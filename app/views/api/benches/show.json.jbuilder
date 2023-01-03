# want all users to have same structure in frontend store
# json.benches do
#   json.extract! @bench, :id, :title, :description, :price, :seating, :lat, :lng
# end

json.set! @bench.id do
    json.extract! @bench, :id, :title, :description, :price, :seating, :lat, :lng
end
