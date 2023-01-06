

class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render :index
  end

  def create
    @user = current_user
    # TODO: CONFIRM THIS WORKS
    render '/login' if !@user
    @article = Article.new({
      author_id: @user.id,
      title: article_params.title,
      topic: article_params.topic,
      body: article_params.body
    })

    if @article&.save
      render :show
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def show
    @article = Article.find(params[:id])
    render :show
  end

  def searchByTopic
    @Articles = Article.where(topic: params[:topic])
    render :index
  end

  def searchByTitle
    @Articles = Article.where(topic: params[:topic])
    render :index
  end


  def article_params
    # QUESTION: HOW DO YOU GET / USE USER ID HERE?
    # TODO: CONFIRM THIS WORKS
    # @params ||= params.require(:article).permit(:title, :body)
    params.require(:article).permit(:title, :body, :topic)
    # front end can send data like { user: username: 'bob, password:: 'password'}
    # front end can also send it as { username: 'bob', password: 'password'}
    # ^ here, we would be able to get username column (automatically cause of controller name)
  end
end
