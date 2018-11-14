class ConglomeratesController < ApplicationController
  
  def index
    @data = Conglomerate.get_data(@current_user.id)
    render json: @data.to_json, status: 200
  end

  def totals
    @totals = Conglomerate.get_totals(@current_user.id)
    render json: @totals.to_json, status: 200
  end
end
