using Microsoft.AspNetCore.Mvc;
using Synergie4D_Back.Models.Outfit;
using Synergie4D_Back.Models.Weather;
using Synergie4D_Back.Services.WeatherService;

namespace Synergie4D_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherService _weatherService;

        public WeatherController(IWeatherService weatherService)
        {
            _weatherService = weatherService;
        }

        [HttpGet("GetCurrentTemperature/{city}")]
        public async Task<Weather> Get(string city)
        {
            Weather weather = await _weatherService.GetCurrentTemperatureAsync(city);

            return weather;
        }
        [HttpGet("GetAverageTemperature/{city}")]
        public async Task<Weather> GetForecastWeather(string city)
        {
            Weather weather = await _weatherService.GetAverageTemperatureAsync(city);

            return weather;
        }
    }
}