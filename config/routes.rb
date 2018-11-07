Rails.application.routes.draw do
  resources :expenses
  scope '/api' do
    get '/items', to: 'items#index'
    post '/items/new', to: 'items#create'
    post '/expenses/new', to: 'expenses#create'
    post '/carts/new', to: 'carts#create'
    get '/expenses', to: 'expenses#index'

    get '/state', to: 'application#index'
  end
end
