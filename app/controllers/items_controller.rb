class ItemsController < ApplicationController
  # skip_before_filter :verify_authenticity_token
  def index
    @items = Item.all
    render json: @items, status: 200
  end

  def create
    @item = Item.create(item_params)
    @current_user.items << @item
    render json: @item, status: 201
  end

  def sales
    @sales = Cart.get_daily_merch_sales(@current_user.id)
    render json: @sales, status: 200
  end

  def update
    @item = Item.find_by_id(params['item']['id'])
    @item.update(item_params)
    render json: @item, status: 200
  end

  def destroy
    @item = Item.find_by_id(params['item']['id'])
    @item_id = @item.id
    @item.destroy
    render json: @item_id, status: 202
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :wholesale_price, :kind, :id)
  end
end
