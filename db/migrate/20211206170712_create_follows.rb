class CreateFollows < ActiveRecord::Migration[6.1]
  def change
    create_table :follows do |t|
      t.references :follower, references: :users, null: false, foreign_key: { to_table: :users }
      t.references :followed, references: :users, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
