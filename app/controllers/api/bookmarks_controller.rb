class Api::BookmarksController < ApplicationController

  def index
    @user = current_user
    @articles = Bookmark.where(author_id: @user.id)
    render :index
  end

  def show
    @user = current_user
    @article = Bookmark.where(bookmark_params)
    # Question: what to do here?
    @bookmark_bool = @article ? true : false
    # question: what does this do?
    render :show
  end

  def create
    p 'look here'
    p bookmark_params
    @bookmark = Bookmark.new(bookmark_params)
    # @bookmark.author_id = current_user.id
    # render '/login' if !@user

    @article = Article.find(bookmark_params["article_id"])

    if @bookmark&.save
      # render :show
      # # WHAT TO DO HERE
      render :create
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def destroy
    @bookmark = Bookmark
      .where(article_id: bookmark_params['article_id'])
      .where(user_id: bookmark_params['user_id'])

    p "-------------------------"

    if @bookmark[0] && @bookmark[0].destroy
      @article = Article.find(bookmark_params['article_id'])
      render '/api/articles/show'
    else
      render json: { errors: @bookmark.errors.full_messages }, status: 422
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:article_id, :user_id)
  end
end
