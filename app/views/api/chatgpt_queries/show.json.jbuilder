json.set! @chatgpt_query.id do
    json.extract! @chatgpt_query, :id, :prompt, :body, :author_id
end

