class CartsController < ApplicationController

  def create_cash

    items = cart_params
    total = 0
    wholesale_total = 0
    @cart = Cart.new
    items['_json'].each do |item|
      i = Item.find_by_id(item['id'])
      total += i['price']
      wholesale_total += i['wholesale_price']
      @cart.items << i
    end

    @cart.payment_type = 'cash'
    @cart.total = total
    @cart.wholesale_total = wholesale_total
    @cart.square_total = 0
    @cart.date = Date.today
    @cart.save
    @current_user.carts << @cart


    render json: @cart, status: 201



  end

  def create_credit

    items = cart_params
    total = 0
    wholesale_total = 0
    @cart = Cart.new
    items['_json'].each do |item|
      i = Item.find_by_id(item['id'])
      total += i['price']
      wholesale_total += i['wholesale_price']
      @cart.items << i
    end

    @cart.payment_type = 'credit'
    @cart.total = total
    @cart.wholesale_total = wholesale_total
    @cart.square_total = (total.to_f * 0.0275)
    @cart.date = Date.today
    @cart.save
    @current_user.carts << @cart

    render json: @cart, status: 201

  end


  private
  def cart_params

    # params.permit(:cart, {"0" => [:id,:total,:name,:price,:kind,:payment_type]})
    params.permit({"_json" => [:id,:total,:name,:price,:kind,:wholesale_price]})
    # params.permit({"cart" => [:id,:total,:name,:price,:kind,:payment_type]},:payment_type,:cart)
  end
end
