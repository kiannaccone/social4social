class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def index
    user = User.all
    render json: user, status: :ok
  end

  # def show
  #   user = User.find(params[:id])
  #   render json: user, status: :ok
  # end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content 
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user, status: :accepted
  end


  private

  def user_params
    params.permit(:email, :username, :password, :bio, :image) 
  end
end
