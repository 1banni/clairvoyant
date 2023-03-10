Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/api/test', to: 'application#test'
  # post '/api/login_test', to: '/login'


  namespace :api, defaults: { format: :json } do
    resource :chat, only: [:show, :index, :create, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :articles, only: [:show, :index, :create, :update, :destroy]
    resources :bookmarks, only: [:show, :index, :create, :destroy]
    resources :claps, only: [:show, :index, :create, :destroy]
    # resources :chats, only: [:show, :index, :create]
    resources :comments, only: [:create, :show, :update, :destroy]
    resources :users, only: [:show, :index, :create]
    # singular resource causes show/destroy routes to have no :id wildcard
  end


  # catchall route (must remain at bottom)
  get '*path', to: "static_pages#frontend_index"
end
