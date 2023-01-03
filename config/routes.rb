Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/api/test', to: 'application#test'
  # post '/api/login_test', to: '/login'



  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: :create
    resources :articles, only: [:show, :index, :draft, :create]
    resources :queries, only: [:show, :index, :draft, :create]
    # singular resource causes show/destroy routes to have no :id wildcard
  end

end
