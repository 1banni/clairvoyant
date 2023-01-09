class Api::BookmarksController < ApplicationController

  def index
    # Error here was that you rendered :index even when @bookmarks empty
    # It was causing issues in your store
    if current_user
      @bookmarks = Bookmark.where(user_id: current_user.id)
      if @bookmarks
        render :index
      else
        render json: {}, status: :ok
      end
    else
      render json: {}, status: :ok
    end
  end

  def create
    p 'look here'
    p bookmark_params
    @bookmark = Bookmark.new(bookmark_params)
    # @bookmark.user_id = current_user.id
    # render '/login' if !@user (or if @user.id != bookmark_params.user_id)
    @article = Article.find(bookmark_params['article_id'])
    if @bookmark&.save
      render :create
    else
      render json: { errors: @bookmark.errors.full_messages }, status: 422
    end
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])
    if @bookmark&.destroy
      render json: {}, status: :ok
    else
      render json: { errors: @bookmark.errors.full_messages }, status: 422
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:id, :article_id, :user_id)
  end
end
