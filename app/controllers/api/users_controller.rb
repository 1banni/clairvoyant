class Api::UsersController < ApplicationController
  # specify which top level keys will be auto wrapped under a key of user_paramswe're in users controller, so top level key it willwrap (by default?) is user
  # if our form is formatted as such, have a top level key of username and a top paassword
  # will look through user attributes and for any top level key that matches an attribute, it will nest tthat key value
  # (this line always happens)
  # wrap_parameters include User.attribute_names
  # TRANSFER!!!!!!!
  wrap_parameters include: User.attribute_names + ['password'] + [:photo], format: :multipart_form


  def show
    @user = User.find(params[:id])
    # @photo_url = rails_blob_path(@user.photo, disposition: "attachment", only_path: true)

    p 'users_controller#show'
    p @user
    if @user
      render :show
    else
      p '@user.errors.full_messages'
      p @user.errors.full_messages
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def create
    p '-----------------------------'
    p 'in users_controller#create'
    p 'user_params'
    p user_params
    @user = User.new(user_params)
    p '@user'
    p @user
    p '@user.valid?'
    # p @user.valid?

    if @user&.save
      login(@user)
      render :show
    else
      # render json: @user.errors.full_messages, state: 422
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
end
