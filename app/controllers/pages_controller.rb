# app/controllers/pages_controller.rb
class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:home]

  def welcome
  end

  def home
  end

  def about
  end
end
