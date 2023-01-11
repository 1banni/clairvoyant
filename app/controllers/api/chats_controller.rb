class Api::ChatsController < ApplicationController
  # purpose of this controlller
  # 1) power search for creating queries
  # 2) power results

  def create
    author_id = current_user.id
    p current_user.id
    p query_params
    body = Chat.make_api_request(query_params[:prompt])
    text = body["choices"][0]["text"]
    p '--------------'
    p 'body.choices'
    p body.choices
    p 'text'
    p text
    p '--------------'
    render json: text
  end

  private
  def query_params
    params.require(:query).permit(:prompt)
  end
end


# scrapped from create
   # options = {
    #   title: query_params[:prompt],
    #   author_id: author_id,
    #   body: body
    # }

    # @query = Chat.new(options)
    # if @query&.save
    #   #
    #   render :show
    # else
    #   render json: { errors: ['Login to draft'] }
    # end