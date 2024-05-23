using Synergie4D_Back.Models.Weather;

namespace Synergie4D_Back.Services.WeatherService
{
    public interface IWeatherService
    {
        Task<Weather> GetCurrentTemperatureAsync(string city);

        Task<Weather> GetAverageTemperatureAsync(string city);
    }
}