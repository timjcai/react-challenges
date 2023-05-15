class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.integer :height
      t.date :birthdate
      t.integer :experience
      t.integer :jerseynumber
      t.integer :salary
      t.references :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
