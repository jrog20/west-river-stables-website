# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
theman = User.create(username: 'theman', email: 'the@man.com', password: 'password')
roger = User.create(username: 'roger', email: 'roger@roger.com', password: 'password')
papa = User.create(username: 'papa', email: 'papa@papa.com', password: 'password')

theman.secrets.create(content: 'The Man')
roger.secrets.create(content: 'I want this website so I can upload photos')
papa.secrets.create(content: 'I like puppies')
papa.secrets.create(content: 'I like kitties')
