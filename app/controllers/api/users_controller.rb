class Api::UsersController < ApplicationController
  # specify which top level keys will be auto wrapped under a key of user_paramswe're in users controller, so top level key it willwrap (by default?) is user
  # if our form is formatted as such, have a top level key of username and a top paassword
  # will look through user attributes and for any top level key that matches an attribute, it will nest tthat key value
  # (this line always happens)
  # wrap_parameters include User.attribute_names
  # TRANSFER!!!!!!!
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
    # @photo_url = rails_blob_path(@user.photo, disposition: "attachment", only_path: true)

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
      # render json: @user.errors.full_messages, status: 422
      render json: { errors: @user.errors.full_messages , status: :unprocessable_entity }
    end
  end

  # you can have whatever routes you want!
  private
  def user_params
    # front end can send data like { user: username: 'bob, password:: 'password'}
    # front end can also send it as { username: 'bob', password: 'password'}
    # ^ here, we would be able to get username column (automatically cause of controller name)
    params.require(:user).permit(
      :email,
      :username,
      :name,
      :password,
      :bio,
      :photo
    )
  end

  # TODO: TRY DELETING ME AND SEE IF IT (user index) STILL WORKS
  # it should,

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
