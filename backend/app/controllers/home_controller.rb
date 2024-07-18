class HomeController < ApplicationController
    def index
      render json: { message: 'Welcome to the Library Management App API' }
    end
end
  