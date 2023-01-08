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
    @bookmark = Bookmark.new(bookmark_params)
    @poen.author_id = current_user.id
    # render '/login' if !@user

    if @bookmark&.save
      # render :show
      # # WHAT TO DO HERE
      render json: {}, status: :ok
    else
      render json: { errors: @article.errors.full_messages }, status: 422
    end
  end

  def destroy
    @bookmark = Article.find(article_params.articleId)

    if @bookmark.destroy
      render json: { message: 'success - bookmark saved'}
    else
      render json: { errors: @bookmark.errors.full_messages }, status: 422
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:article_id)
  end
end
