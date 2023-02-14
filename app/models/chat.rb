# # == Schema Information
# #
# # Table name: chatgpt_queries
# #
# #  id         :bigint           not null, primary key
# #  prompt     :string
# #  body       :string           not null
# #  author_id  :bigint           not null
# #  created_at :datetime         not null
# #  updated_at :datetime         not null
# #

# require 'httparty'
# require 'dotenv/load'

# class Chat < ApplicationRecord
#   def self.make_api_request(prompt)
#     require 'httparty'

#     response = HTTParty.post("https://api.openai.com/v1/engines/davinci-codex/completions",
#       headers: {
#         "Content-Type" => "application/json",
#         "Authorization" => "Bearer #{ENV["OPENAI_API_KEY"]}"
#       },
#       body: {
#         prompt: prompt,
#         max_tokens:100,
#         temperature:0.8
#     }.to_json)


#     JSON.parse(response.body)
#   end



#   # def self.make_api_request(prompt)
#     # warn "in make_api_request"
#     # Rails.logger.debug "in make_api_request (rails logger)!!"
#     # OpenAI.api_key = ENV["OPENAI_API_KEY"]

#     # res = Openai::Completion.create(
#     #   engine: 'davinci',
#     #   max_tokens: 2048, # change this?
#     #   n: 1,
#     #   stop: nil,
#     #   temperature: 0.5,
#     #   prompt: prompt,
#     # )

#     # return res.choices.first.text
#   # end

# end
