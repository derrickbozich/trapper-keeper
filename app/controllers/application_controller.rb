class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :set_csrf_cookie
  before_action :authenticate_request

  attr_reader :current_user

  include ExceptionHandler

  def index
    expenses = Expense.all
    items = Item.all
    carts = Cart.all
    data_hash = {expenses: expenses, items: items, carts: carts }
    render json: data_hash, status: 200
  end



  private
  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    ApplicationRecord.current_user(@current_user)
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end

  def set_csrf_cookie
    cookies["my_csrf_token"] = form_authenticity_token
  end

end
