json.set! @query.id do
    json.extract! @query, :id, :string, :output, :author
end

