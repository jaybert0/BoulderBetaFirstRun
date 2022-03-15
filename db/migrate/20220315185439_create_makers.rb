class CreateMakers < ActiveRecord::Migration[6.1]
  def change
    create_table :makers do |t|
      t.string :username
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
