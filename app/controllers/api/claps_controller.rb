class Api::ClapsController < ApplicationController
  def index
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
    params.require(:clap).permit(:id, :article_id, :user_id)
  end
end
