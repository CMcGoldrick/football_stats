require 'uri'
require 'net/http'
require 'openssl'
require 'unirest'

class ResultsController < ApplicationController
  def live
    # url = URI("https://api.sportradar.us/soccer-t3/eu/en/schedules/live/results.json?api_key=7v67xcs28wetuawtw8ybw9tw")

    # http = Net::HTTP.new(url.host, url.port)
    # http.use_ssl = true
    # http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    # request = Net::HTTP::Get.new(url)

    # response = http.request(request)
    # data = response.read_body

    # render json: data
  end

  def results
    response = Unirest.get("https://api.sportradar.us/soccer-t3/eu/en/schedules/2018-04-01/results.json?api_key=7v67xcs28wetuawtw8ybw9tw")
    data = response.body
    render json: data
  end
end
