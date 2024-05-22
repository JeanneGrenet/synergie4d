using Microsoft.AspNetCore.Mvc;
using Synergie4D_Back.Models.Outfit;
using Synergie4D_Back.Services.OutfitService;

namespace Synergie4D_Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OutfitsController : ControllerBase
    {
        private readonly IOutfitService _outfitService;

        public OutfitsController(IOutfitService outfitService)
        {
            _outfitService = outfitService;
        }

        [HttpGet("GetAll")]
        public IEnumerable<Outfit> GetAllOutfits()
        {
            IEnumerable<Outfit> outfits = _outfitService.GetAllOutfits();

            return outfits;
        }

        [HttpGet("GetWithParameters/{temperature}/{style}")]
        public IEnumerable<Outfit> GetOutfitsWithParameters(double temperature, string style)
        {
            IEnumerable<Outfit> outfits = _outfitService.GetOutfitsWithParameters(temperature, style);

            return outfits;
        }
    }
}