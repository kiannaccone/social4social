Rails.application.routes.draw do
  
  resources :follows, only: [:index, :create]
  resources :comments
  resources :posts
  resources :users, only: [:index, :create, :show, :destroy, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post "/signup", to: "users#create"

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  delete "/unfollow/:id", to: "follows#destroy"

  patch "/posts/:id/like", to: "posts#increment_likes"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

