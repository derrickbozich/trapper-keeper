class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.date :date
      t.float :total
      t.float :wholesale_total
      t.float :square_total
      t.string :payment_type
    end
  end
end
