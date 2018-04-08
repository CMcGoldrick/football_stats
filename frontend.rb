# require 'uri'
# require 'net/http'
# require 'openssl'

# url = URI("https://api.sportradar.us/soccer-t3/eu/en/schedules/2018-04-01/results.json?api_key=7v67xcs28wetuawtw8ybw9tw")

# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Get.new(url)

# response = http.request(request)
# data = response.read_body

# puts data

require 'unirest'

response = Unirest.get("https://api.sportradar.us/soccer-t3/eu/en/schedules/2018-04-01/results.json?api_key=7v67xcs28wetuawtw8ybw9tw")

data = response.body

puts data["results"]





