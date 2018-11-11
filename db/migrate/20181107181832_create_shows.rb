class CreateShows < ActiveRecord::Migration[5.0]
  def change
    create_table :shows do |t|
      t.date :date
      t.string :venue
      t.string :city
      t.string :state
      t.integer :door_deal, default: 0
      t.integer :user_id
    end
  end
end
