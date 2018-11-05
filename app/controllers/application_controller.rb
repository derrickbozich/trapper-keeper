class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.


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
