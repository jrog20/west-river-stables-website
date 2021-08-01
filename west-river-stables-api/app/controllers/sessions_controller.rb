class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      response = {
        user: @user.user_serializer
      }
      render json: response, status: :ok
    else
      response = {
        error: "Invalid login",
        details: @user.errors.full_messages
      }
      render json: response, status: :unauthorized
    end
  end

  def get_current_user
    if logged_in?
      render json: {
          user: current_user.user_serializer
        }, status: :ok
    else
      render json: {error: "No current user"}
    end
  end

  def destroy
    session.clear
    render json: {
      message: "Successfully logged out"
    }
  end
end
