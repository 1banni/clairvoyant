json.set! @chat.id do
    json.extract! @chat, :id, :prompt, :body, :author_id
end

