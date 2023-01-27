class Api::CommentsController < ApplicationController

  # def index
  #   # POTENTIAL BUG TODO QUESTION
  #   p 'in index'
  #   p '--------------------------------------------------------'
  #   p '--------------------------------------------------------'
  #   p '--------------------------------------------------------'
  #   @comments = Comment.where(article_id: params[:article_id])

  #   p 'CommentsController#Index'
  #   p '@comments'
  #   p @comments

  #   if @comments
  #     render :index
  #   else
  #     render json: {}, status: :ok
  #   end
  # end

  def create
    @comment = Comment.new(comment_params)
    # @article = Article.find_by(comment_params.article_id)

    if @comment&.save
      render :show
    else
      render json: { errors: @commment.errors.full_messages }, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    # @article = Article.find_by(comment_params.article_id)
    if @comment
      if @comment.author_id == current_user.id
        if @comment.update(comment_params)
          render :show
        else
          render json: { errors: @comment.errors.full_messages }, status: 422
        end
      else
        render json: { errors: ["You must be logged in as author to edit the comment."] }
      end
    else
      render json: { errors: ['Comment not found in database'] }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment && @comment.author_id == current_user.id
      if @comment.destroy
        render json: {}, status: :ok
      else
        render json: { errors: ["You must be logged in as author to delete the comment."] }
      end
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  private
  def comment_params
    # potential bug missing ID
    params.require(:comment).permit(:body, :author_id, :article_id, :parent_id)
  end
end
