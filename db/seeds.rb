# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def seed_image(file_name)
  File.open(File.join(Rails.root, "/app/assets/images/seed/#{file_name}.png"))
end

user_list = [
  ["ash@gmail.com", "123456","123456", "Ash", "Ketchum", "Ketchum-Em-All", "Ash-2"],
  ["misty@gmail.com", "123456", "123456", "Misty", "Of the Cerulean Gym", "Miss.Misty", "Misty-1"],
  ["brock@gmail.com", "123456", "123456", "Brock", "Of the Pewter Gym", "Rock-On", "Brock-3"]
]

user_list.each do |email, password, password_confirmation, fname, lname, username, avatar|
  people = User.create(email: email, password: password, password_confirmation: password_confirmation, fname: fname, lname: lname, username: username)
  people.avatar = seed_image(avatar)
  people.save
end
