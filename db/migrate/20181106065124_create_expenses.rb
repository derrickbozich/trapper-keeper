class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.string :kind
      t.float :amount, default: 0
      t.text :description
      t.string :date
      t.string :payment_type
      t.timestamps
    end
  end
end
