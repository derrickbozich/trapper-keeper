class ItemsController < ApplicationController
  # skip_before_filter :verify_authenticity_token
  def index
    @items = Item.all
    render json: @items, status: 200
  end

  def create
    @item = Item.create(item_params)
    render json: @item, status: 201
  end

  def sales
    @sales = Cart.get_daily_merch_sales
    render json: @sales, status: 200
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :wholesale_price, :kind)
  end
end
