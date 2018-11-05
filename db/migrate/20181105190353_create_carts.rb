class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.date :date
      t.string :payment_method
      

    end
  end
end
