class SessionsController < ApplicationController
  def create
    # byebug
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      render json: @user
    else
      render json: {
        error: "Invalid Login"
      }, status: :unauthorized
    end

  end

  def delete

  end
end