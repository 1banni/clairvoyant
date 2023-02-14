class Api::ChatsController < ApplicationController
  def create
    author_id = current_user.id
    body = Chat.make_api_request(query_params[:prompt])
    text = body["choices"][0]["text"]
    render json: text
  end

  private
  def query_params
    params.require(:query).permit(:prompt)
  end
end

