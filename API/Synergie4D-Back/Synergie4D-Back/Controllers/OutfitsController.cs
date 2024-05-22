using Microsoft.AspNetCore.Mvc;
using Synergie4D_Back.Models.Outfit;
using Synergie4D_Back.Models.Weather;
using Synergie4D_Back.Services.OutfitService;
using Synergie4D_Back.Services.WeatherService;


namespace Synergie4D_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OutfitsController : ControllerBase
    {
        private readonly IOutfitService _outfitService;

        private readonly IWeatherService _weatherService;

        public OutfitsController(IOutfitService outfitService, IWeatherService weatherService)
        {
            _outfitService = outfitService;
            _weatherService = weatherService;
        }

        [HttpGet("GetAll")]
        public IEnumerable<Outfit> GetAllOutfits()

        {
            IEnumerable<Outfit> outfits = _outfitService.GetAllOutfits();

            return outfits;
        }

        [HttpGet("GetWithParameters/{city}/{style}")]
        public async Task<IEnumerable<Outfit>> GetOutfitsWithParameters(string city, string style)
        {
            Weather weather = await _weatherService.GetWeatherAsync(city);
            double temperature = weather.Temperature;

            IEnumerable<Outfit> outfits = _outfitService.GetOutfitsWithParameters(temperature, style);

            return outfits;
        }
    }
}