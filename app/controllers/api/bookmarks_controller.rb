class Api::BookmarksController < ApplicationController

  # bookmarks for a specific user
  def show
    @bookmarks = Bookmark.where(user_id: params[:id])
    if @bookmarks
      render :show
    else
      render json: {}, status: :ok
    end
  end

  # all bookmarks
  def index
    @bookmarks = filter(Bookmark.all)

    if @bookmarks
      render :index
    else
      render json: {}, status: :ok
    end

  end

  def create
    @bookmark = Bookmark.new(bookmark_params)

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
