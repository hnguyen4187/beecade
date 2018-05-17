class AddColumnToPoints < ActiveRecord::Migration[5.2]
  def change
    add_column :points, :game_id, :integer
  end
end
