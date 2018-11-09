class ShowsController < ApplicationController
  def create
    @show = Show.create(show_params)
    render json: @show, status: 201
  end

  def index
    @shows = Show.all
    render json: @shows, status: 200
  end

  private
  def show_params
    params.require(:show).permit(:date, :city, :venue, :state, :door_deal)
  end
end
