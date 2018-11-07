class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  def index
    expenses = Expense.all
    items = Item.all
    carts = Cart.all
    data_hash = {expenses: expenses, items: items, carts: carts }
    render json: data_hash, status: 200
  end

  before_action :set_csrf_cookie

  def set_csrf_cookie
    cookies["my_csrf_token"] = form_authenticity_token
  end

  # default
  # protect_from_forgery with: :exception

  # override
   # protect_from_forgery unless: -> { request.format.json? }

  # stack overflow
  # after_action :set_csrf_cookie
  #
  # protected
  #
  #   def set_csrf_cookie
  #     cookies["X-CSRF-Token"] = form_authenticity_token
  #   end
end
