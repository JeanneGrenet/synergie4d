using Newtonsoft.Json;
using Synergie4D_Back.Models.Weather;

namespace Synergie4D_Back.Services.WeatherService
{
    public class WeatherService : IWeatherService
    {
        private readonly HttpClient _httpClient;

        public WeatherService()
        {
            _httpClient = new HttpClient();
        }

        public async Task<Weather> GetWeatherAsync(string city)
        {
            string apiKey = "a23d97464a974bd9860154322231405";
            string requestUrl = $"https://api.weatherapi.com/v1/current.json?key={apiKey}&q={city}";
            HttpResponseMessage response;

            try
            {
                response = await _httpClient.GetAsync(requestUrl);
            }
            catch (HttpRequestException e)
            {
                throw new ArgumentException($"Error fetching weather data: {e.Message}");
            }

            if (!response.IsSuccessStatusCode)
            {
                throw new ArgumentException($"Error fetching weather data: {response.StatusCode}");
            }

            string content;

            try
            {
                content = await response.Content.ReadAsStringAsync();
            }
            catch (Exception e)
            {
                throw new ArgumentException($"Error reading weather data: {e.Message}");
            }

            dynamic jsonResponse;

            try
            {
                jsonResponse = JsonConvert.DeserializeObject(content)!;
            }
            catch (System.Text.Json.JsonException e)
            {
                throw new ArgumentException(message: $"Error parsing weather data: {e.Message}");
            }

            if (jsonResponse == null || jsonResponse!.current == null || jsonResponse!.location == null)
            {
                throw new ArgumentException("Error parsing weather data: Missing expected elements");
            }

            return new Weather
            {
                City = jsonResponse!.location.name,
                Temperature = jsonResponse.current.temp_c,
                WeatherDescription = jsonResponse.current.condition.text
            };
        }
    }
}