class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: %i[login register]
  # POST /register
  def register
    @user = User.create!(user_params)
    if @user.save
     authenticate params[:email], params[:password]
    else
     render json: @user.errors, status: :bad
    end

  end

  def login
    authenticate params[:email], params[:password]
  end

  def logout
    set_jwt_cookie('')
    render json: {message: "Logged Out"}, status: 200
  end



 private

 def user_params
   params.permit(:name, :email, :password)
 end

 def authenticate(email, password)
    command = AuthenticateUser.call(email, password)
    if command.success?
      set_jwt_cookie(command.result)

      render json: {
        access_token: command.result,
        message: 'Login Successful'
      }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
 end

 def set_jwt_cookie(auth_token)
   cookies["my_jwt_token"] = auth_token
 end

end
