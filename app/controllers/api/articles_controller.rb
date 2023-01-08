

class Api::ArticlesController < ApplicationController
  def index
    @articles = filter(Article.all)
    @user = current_user
    render :index
  end

  def show
    @article = Article.find(params[:id])
    @comments = @channel.comments
    render :show
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

  def edit
    @article = Article.find_by(id: params[:id])
  end

  def update
    @article = Article.find_by(id: params[:id])

    if @article
      if current_user == @article.author
        if @article.update(article_params)
          render :show
        else
          render json: {error: @article.errors.full_messages}, status: 422
        end
      else
        render json: { errors: ["You must be logged in as author to edit the article."] }
      end
    else
      render json: { errors: ["Article not found. Email support at api@clairvoyant.com"]}
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

  def destroy
    @article = Article.find(params[:id])
    if @article && @article.owner_id == current_user.id
      @article.destroy
    else
      render json: { errors: ["You must be logged in as author to edit the article."]}, status: 422
    end
  end


  private
  def article_params
    # QUESTION: HOW DO YOU GET / USE USER ID HERE?
    # TODO: CONFIRM THIS WORKS
    # @params ||= params.require(:article).permit(:title, :body)
    # Returns nested hash
    params.require(:article).permit(:title, :topic, :blurb, :body)
    # front end can send data like { user: username: 'bob, password:: 'password'}
    # front end can also send it as { username: 'bob', password: 'password'}
    # ^ here, we would be able to get username column (automatically cause of controller name)
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
