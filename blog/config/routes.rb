Rails.application.routes.draw do
  resources :posts
  root 'pages#index'
  get 'about', to: 'pages#about'
end
