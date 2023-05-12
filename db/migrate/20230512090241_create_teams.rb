class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :slug
      t.string :winsandlosses
      t.string :arena
      t.string :conference

      t.timestamps
    end
  end
end
