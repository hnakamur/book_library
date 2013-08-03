class ModifyCoverImageColumnType < ActiveRecord::Migration
  def change
    change_column :books, :cover_image, :string
  end
end
