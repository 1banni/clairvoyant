Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/api/test', to: 'application#test'
  # post '/api/login_test', to: '/login'



  namespace :api, defaults: { format: :json } do
    resources :queries, only: [:show, :index, :draft, :create]
    resources :users, only: :create
    # singular resource causes show/destroy routes to have no :id wildcard
    resource :session, only: [:show, :create, :destroy]
  end

end
