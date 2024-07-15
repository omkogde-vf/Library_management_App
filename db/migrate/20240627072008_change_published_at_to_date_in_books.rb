class ChangePublishedAtToDateInBooks < ActiveRecord::Migration[7.1]
  def change
    change_column :books, :published_at, :date
  end
end
