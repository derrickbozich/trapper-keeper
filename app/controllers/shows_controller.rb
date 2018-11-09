class ShowsController < ApplicationController
  def create
    @show = Show.create(show_params)
    render json: @show, status: 201
  end

  def index
    @shows = Show.all
    render json: @shows, status: 200
  end

  def update
    @show = Show.find_by_id(params['show']['id'])
    @show.update(show_params)
    render json: @show, status: 200
  end

  def delete
    @show = Show.find_by_id(params['show']['id'])
    @show_id = @show.id
    @show.destroy
    render json: @show_id, status: 202
  end

  private
  def show_params
    params.require(:show).permit(:date, :city, :venue, :state, :door_deal, :id)
  end
end
