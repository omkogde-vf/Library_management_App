# config/routes.rb
Rails.application.routes.draw do
  resources :books, defaults: {format: :json}
end
