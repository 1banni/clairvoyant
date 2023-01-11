class Api::ClapsController < ApplicationController
  def index
    # Error here was that you rendered :index even when @claps empty
    # It was causing issues in your store
    # @article = Article.find(params[:id])
    # @claps = current_user.claps
    # @claps = Clap.where(user_id: current_user.id)
    @claps = Clap.all
    if @claps
      render :index
    else
      render json: {}, status: :ok
    end
  end

  def show
    @article = Article.find(params[:id])
    @clap = Clap.where(user_id: current_user.id)&.first()

    if @clap
      render :show
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
