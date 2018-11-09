class CreateConglomerates < ActiveRecord::Migration[5.0]
  def change
    create_table :conglomerates do |t|

      t.timestamps
    end
  end
end
