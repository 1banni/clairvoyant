class ChatgptQuery < ApplicationRecord
  async def make_api_request(prompt)
    warn "in make_api_request"
    Rails.logger.debug "in make_api_request (rails logger)!!"
    Openai.api_key = ""

    res = Openai::Completion.create(
      engine: 'davinci',
      max_tokens: 2048, # change this?
      n: 1,
      stop: nil,
      temperature: 0.5,
      prompt: prompt,
    )

    return res.choices.first.text
  end

end
