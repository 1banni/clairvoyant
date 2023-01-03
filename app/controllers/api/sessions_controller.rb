# TRANSFER THESE NOTES!!!!


class Api::SessionsController < ApplicationController
  # This is a failsafe. We're going to prevent people on front end
  # from seeing the login form
  before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      # render json: ['No current user']
      # if user were nested, this would be
      render json: { user: nil }
    end
  end

  def create
    credential = params[:credential]
    password = params[:password]
    @user = User.find_by_credentials(credential, password)

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: { errors: ["Invalid username or password."] }, status: :unauthorized
    end
  end

  def destroy
    logout
    render json: { message: 'success'}
  end

  private
  def user_params
    params.require(:user).permit(:credential, :password)
  end
end
