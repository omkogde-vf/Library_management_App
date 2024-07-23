class BooksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    @books = current_user.books
    # render :index  # Explicitly render the jbuilder view
  end

  def show
    render  # Explicitly render the jbuilder view
  end

  def create
    @book = current_user.books.build(book_params)
    @book.save!
    
  end

  def update
    if @book.update(book_params)
      render :update  # Explicitly render the jbuilder view
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @book.destroy
      render json: { message: "Book was successfully destroyed." }, status: :ok
    else
      render json: { error: "Failed to destroy the book." }, status: :unprocessable_entity
    end
  end

  private

  def set_book
    @book = current_user.books.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :description, :publication_date)
  end
end
