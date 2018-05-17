Rails.application.routes.draw do
  get 'games/hangman'
  get 'games/memory'
  # get 'points/show'
  # get 'points/index'
  # get 'points/view'
  devise_for :users

  resources :users
  resources :points

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'users#show'
end
