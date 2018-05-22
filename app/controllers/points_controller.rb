class PointsController < ApplicationController

  def show
    @point = Point.find(params[:id])
  end

  def index
    @point = Point.all
  end

  def create
    @game = Game.where(name: params[:points][:game]).first
    p "************"
    p params
    p @game
    p "************"
    @point = Point.new(point_params)
    @point.user_id = current_user.id
    @point.game_id = @game.id
    @point.save
  end

  private
  def point_params
    params.require(:points).permit(:score)
  end
  def get_game
    params.require(:points).permit(:score, :game)
  end
end
