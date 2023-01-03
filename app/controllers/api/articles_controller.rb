

class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render :index
  end


  def create
    @user = current_user
    # TODO: CONFIRM THIS WORKS
    render '/signup' if !@user
    options = {
      author_id: @user.id,
      title: article_params.title,
      body: article_params.body
    }
    @article = Article.new(options)
    if @article&.save
      render :show
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def show
    @bench = Article.find(params[:id])
    render :show
  end


  def article_params
    # QUESTION: HOW DO YOU GET / USE USER ID HERE?
    # TODO: CONFIRM THIS WORKS
    @params ||= params.require(:article).permit(:title, :body)
    # front end can send data like { user: username: 'bob, password:: 'password'}
    # front end can also send it as { username: 'bob', password: 'password'}
    # ^ here, we would be able to get username column (automatically cause of controller name)
  end
end
