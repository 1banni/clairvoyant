class Api::ChatgptQueriesController < ApplicationController
  # purpose of this controlller
  # 1) power search for creating queries
  # 2) power results


  # def create
  #   author_id = current_user.id
  #   body = await ChatgptQuery.make_api_request(query_params[:prompt])
  #   options = {
  #     title: query_params[:prompt],
  #     author_id: author_id,
  #     body: body
  #   }

  #   @query = ChatgptQuery.new(options)
  #   if @article&.save
  #     render 'api/queries/show'
  #   else
  #     render json: { errors: ['Login to draft'] }
  #   end
  # end

  # private
  # def query_params
  #   params.require(:query).permit(:prompt)
  # end
end
