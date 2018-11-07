class CartsController < ApplicationController

  def create
    @items = cart_params
    @cart = Cart.new
    @items['_json'].each do |item|
      i = Item.find_by_id(item['id'])
      @cart.items << i
    end
    @cart.save
  end

  private
  def cart_params
    params.permit("_json" => [:id,:total,:name,:price,:kind])
  end
end
