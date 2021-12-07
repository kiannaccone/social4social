class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorize

  # def current_user
  #   user = User.find_by(id: session[:user_id])
  #   user
  # end

  # def logged_in?
  #   !!current_user
  # end 

  # def authorize
  #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless logged_in?
  # end

end
