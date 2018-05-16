Rails.application.routes.draw do
  get 'points/show'
  get 'points/index'
  get 'points/view'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
