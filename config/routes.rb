# config/routes.rb
Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root 'pages#home', as: :authenticated_root
  end

  root to: 'pages#welcome'
  get 'about', to: 'pages#about'
  resources :books
end
