class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.date :date
      t.float :total, default: 0
      t.float :wholesale_total, default: 0
      t.float :square_total, default: 0
      t.string :payment_type
      t.integer :user_id
    end
  end
end
