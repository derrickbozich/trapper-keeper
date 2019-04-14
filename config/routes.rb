Rails.application.routes.draw do
  scope '/api' do
    get '/items', to: 'items#index'
    post '/items/new', to: 'items#create'
    get '/items/:id', to: 'items#show'
    patch '/items/:id/edit', to: 'items#update'
    delete '/items/:id/delete', to: 'items#destroy'

    get '/expenses', to: 'expenses#index'
    post '/expenses/new', to: 'expenses#create'
    get '/expenses/:id', to: 'expenses#show'
    patch '/expenses/:id/edit', to: 'expenses#update'
    delete '/expenses/:id/delete', to: 'expenses#destroy'

    post '/carts/new/cash', to: 'carts#create_cash'
    post '/carts/new/credit', to: 'carts#create_credit'

    post '/uploads', to: 'items#upload'

    get '/items/sales', to: 'items#sales'

    get '/shows', to: 'shows#index'
    get '/shows/:id', to: 'shows#show'
    post '/shows/new', to: 'shows#create'
    patch '/shows/:id/edit', to: 'shows#update'
    delete '/shows/:id/delete', to: 'shows#destroy'

    get '/state', to: 'application#index'

    get '/totals', to: 'conglomerates#totals'

    get '/data', to: 'conglomerates#index'

    post '/register', to: 'users#register'
    post 'users/login', to: 'users#login'
    get '/users/logout', to: 'users#logout'

    get '*path', to: "application#fallback_index_html", constraints: ->(request) do
      !request.xhr? && request.format.html?
    end
  end
end
