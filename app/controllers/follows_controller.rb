class FollowsController < ApplicationController

  def index
    follows = Follow.all
    render json: follows, status: :ok
  end
end
