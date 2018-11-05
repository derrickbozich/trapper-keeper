class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :wholesale_price
      t.integer :price
      t.string :style
    end
  end
end
