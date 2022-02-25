class CommentsController < ApplicationController
  
  def index
    comments = Comment.all 
    render json: comments
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    head :no_content
  end

  def create
    comment = Comment.create(comment_params)
    render json: comment, status: :created
  end

  private
  
  def comment_params
    params.permit(:body)
  end 
end
