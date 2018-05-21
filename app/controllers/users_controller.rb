class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end

  def show
    p params
    p current_user
    if !current_user
      redirect_to new_user_session_path
    elsif params[:id].nil?
      @user = current_user
    else
      @user = User.find(params[:id])
  end
end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    @user.save
    redirect_to user_path(@user)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to new_user_session_path
  end

  private
    def user_params
      params.require(:user).permit(:fname, :lname, :username, :avatar)
    end
end
