Rails.application.routes.draw do

  get '/livescores' => 'results#live'
  get '/results' => 'results#results'

end
