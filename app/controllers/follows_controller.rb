class FollowsController < ApplicationController

  def index
    follows = @current_user.followed_users
    render json: follows, status: :ok
  end

  def create
    follow = Follow.create!(follow_params)
    render json: follow, status: :created
  end

  private

  def follow_params
    params.permit(:follower_id, :followed_id)
  end

end
