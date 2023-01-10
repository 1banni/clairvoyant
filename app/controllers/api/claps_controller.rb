class Api::ClapsController < ApplicationController
  def index
    # Error here was that you rendered :index even when @claps empty
    # It was causing issues in your store
    if current_user
      @claps = Clap.where(user_id: current_user.id)
      if @claps
        render :index
      else
        render json: {}, status: :ok
      end
    else
      render json: {}, status: :ok
    end
  end

  def create
    @clap = Clap.new(clap_params)
    # @clap.user_id = current_user.id
    # render '/login' if !@user (or if @user.id != clap_params.user_id)
    # @article = Article.find(clap_params['article_id'])
    if @clap&.save
      render :create
    else
      render json: { errors: @clap.errors.full_messages }, status: 422
    end
  end

  def destroy
    @clap = Clap.find(params[:id])
    if @clap&.destroy
      render json: {}, status: :ok
    else
      render json: { errors: @clap.errors.full_messages }, status: 422
    end
  end

  private

  def clap_params
    # TODO - Delete ID?
    params.require(:clap).permit(:id, :article_id, :user_id)
  end
end
