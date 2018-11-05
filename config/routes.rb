Rails.application.routes.draw do
  scope '/api' do
    get '/items', to: 'items#index'
    post '/items/new', to: 'items#create'

  end
end
