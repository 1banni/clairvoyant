class Api::BookmarksController < ApplicationController

  # show route returns bookmark ids for a specific user
  def show
    p '--------------------------------------------------'
    p '--------------------------------------------------'
    p '--------------------------------------------------'
    p 'in bookmarks show'
    p '--------------------------------------------------'
    p 'params[:id]'
    p params[:id]
    @bookmarks = Bookmark.where(user_id: params[:id])
    p @bookmarks
    p '@bookmarks'
    if @bookmarks
      render :show
    else
      render json: {}, status: :ok
    end
  end

  # index route returns all bookmarks
  def index
    p 'ended up in index (who knows why) TODO DELETE'
    @bookmarks = filter(Bookmark.all)

    if @bookmarks
      render :index
    else
      render json: {}, status: :ok
    end

  end




  # def index
  #   # Error here was that you rendered :index even when @bookmarks empty
  #   # It was causing issues in your store
  #   if current_user
  #     @bookmarks = Bookmark.where(user_id: current_user.id)
  #     if @bookmarks
  #       render :index
  #     else
  #       render json: {}, status: :ok
  #     end
  #   else
  #     render json: {}, status: :ok
  #   end
  # end

  def create
    p 'in bookmarks_controller#create'
    p 'bookmark_params'
    p bookmark_params
    @bookmark = Bookmark.new(bookmark_params)
    p '@bookmark'
    p @bookmark
    # @bookmark.user_id = current_user.id
    # render '/login' if !@user (or if @user.id != bookmark_params.user_id)
    # @article = Article.find(bookmark_params['article_id'])
    if @bookmark&.save
      p 'bookmark saved'
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
    # TODO - Delete ID?
    params.require(:bookmark).permit(:id, :article_id, :user_id)
  end
end
