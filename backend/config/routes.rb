Rails.application.routes.draw do
  devise_for :users, 
    path: '', 
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }

  resources :books, only: [:index, :create, :show, :update, :destroy]

  get '/private/test', to: 'private#test'

  root "home#index"
end
