# TODO UTMOST IMPORTANCE
# tighten all backend routes up

class Api::ArticlesController < ApplicationController
  def index
    @articles = filter(Article.all)
    @user = current_user
    if @articles
      render :index
    else
      render json: {}, status: :ok
    end
  end

  def show
    @article = Article.find(params[:id])
    # @comments = @article.comments

    if @article
      render :show
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def create
    @article = Article.new(article_params)
    @article.author_id = current_user.id
    # TODO: CONFIRM THIS WORKS

    if @article&.save
      render :show
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article
      if @article.author == current_user
        if @article.update(article_params)
          render :show
        else
          render json: {error: @article.errors.full_messages}, status: 422
        end
      else
        render json: { errors: ["You must be logged in as author to edit the article."] }
      end
    else
      render json: { errors: ["Article not found. Email support at backend@clairvoyant.com"]}
    end
  end

  def destroy
    @article = Article.find(params[:id])
    if @article && @article.author_id == current_user.id
      if @article.destroy
        # render 'api/users/show'
        render json: {}, status: :ok
      else
        render json: { errors: ["You must be logged in as author to delete the article."]}, status: 422
      end
    else
      render json: {errors: ["Article not found"]}, status: 422
    end
  end

  def searchByTopic
    @Articles = Article.where("LOWER(topic) LIKE ?", topic.downcase)
    render :index
  end

  def searchByTitle
    @articles = Article.where("LOWER(title) LIKE ?", title.downcase)
    render :index
  end

  def searchByWhatever
    @articles = Article.where(
      "LOWER(title) LIKE ? OR
       LOWER(topic) LIKE ? OR
       LOWER(blurb) LIKE ? OR
       LOWER(body) LIKE ?",
      title.downcase, topic.downcase, blurb.downcase, body.downcase
    )
    render :index
  end



  private
  def article_params
    # front end can send data like { user: username: 'bob, password:: 'password'}
    # front end can also send it as { username: 'bob', password: 'password'}
    params.require(:article).permit(:title, :topic, :blurb, :body, :author_id)
  end

  def filter_params
    # Makes filter namespace optional in URL
    # Returns nested parameters
    params.fetch(:filter, {})
  end

  def filter(relation)
    return relation if filter_params == {}
    return relation.where(filter_params)
  end
end
