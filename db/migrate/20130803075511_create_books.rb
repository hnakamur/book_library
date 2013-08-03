class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.date :released_on
      t.binary :cover_image

      t.timestamps
    end
  end
end
