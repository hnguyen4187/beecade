class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.integer :user_id
      t.string :score

      t.timestamps
    end
  end
end
