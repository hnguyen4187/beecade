class PointsController < ApplicationController

  def show
    @point = Point.find(params[:id])
  end

  def index
    @point = Point.all
  end

  def create
    @point = Point.new(point_params)
    @point.user_id = current_user.id
    @point.save
  end

  private
  def point_params
    params.require(:point).permit(:score, :game_id)
  end
end
