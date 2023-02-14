class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + [:photo], format: :multipart_form

  def index
    @users = filter(User.all)
    if @users
      render :index
    else
      render json: {}, status: :ok
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def create
    @user = User.new(user_params)

    if @user&.save
      login(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def user_params
    # front end can send data like { user: username: 'bob, password:: 'password'}
    # front end can also send it as { username: 'bob', password: 'password'}
    params.require(:user).permit(
      :email,
      :username,
      :name,
      :password,
      :bio,
      :photo
    )
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
