class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :wholesale_price, default: 0
      t.integer :price, default: 0
      t.string :kind
    end
  end
end
