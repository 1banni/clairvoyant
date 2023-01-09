class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  rescue_from StandardError, with: :unhandled_error
  rescue_from ActionController::InvalidAuthenticityToken,
    with: :invalid_authenticity_token

  before_action :snake_case_params, :attach_authenticity_token

  attr_reader :session_token

  helper_method :current_user, :logged_in?

  def current_user
    # if there's no instance variable (in the request response cycle)
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    # force a token mismatch
    current_user.reset_session_token! if logged_in?
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { message: 'Unauthorized', status: :unauthorized }
    end
  end

  def require_logged_out
    unless !current_user
      render json: { message: 'Currently logged in', status: :unauthorized }
    end
  end

  def test
    # if params.has_key?(:login)
    #   login(User.first)
    # elsif params.has_key?(:logout)
    #   logout
    # end

    # if current_user
    #   render json: { user: current_user.slice(
    #     'id', 'username', 'session_token'
    #   )}
    # else
    #   render json: ['No current user']
    # end
    @article = Article.find(3)
    render '/api/test/index' 
  end


  private
  def snake_case_params
    params.deep_transform_keys!(&:underscore)
  end

  # add this method to the `private` section of your controller:
  def attach_authenticity_token
    headers['X-CSRF-Token'] = masked_authenticity_token(session)
  end

  def invalid_authenticity_token
    render json: { message: 'Invalid authenticity token' }, status: :unprocessable_entity
  end

  def unhandled_error(error)
    if request.accepts.first.html?
      raise error
    else
      @message = "#{error.class} - #{error.message}"
      @stack = Rails::BacktraceCleaner.new.clean(error.backtrace)
      render 'api/errors/internal_server_error', status: :internal_server_error
      logger.error "\n#{@message}:\n\t#{@stack.join("\n\t")}\n"
    end
  end
end
