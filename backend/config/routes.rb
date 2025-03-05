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

  defaults format: :json do  
    resources :books, only: [:index, :create, :show, :update, :destroy]
  end

  get '/private/test', to: 'private#test'

  root "home#index"
end
