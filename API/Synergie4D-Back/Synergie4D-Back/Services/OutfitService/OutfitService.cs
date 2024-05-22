using Synergie4D_Back.Enums;
using Synergie4D_Back.Models.Outfit;

namespace Synergie4D_Back.Services.OutfitService
{
    public class OutfitService : IOutfitService
    {
        private static readonly List<Outfit> outfitList =
        [
            new() {
                Id = 1,
                Description = "T-shirt / jean / basket",
                Style = Style.Relaxed,
                Weather = Temperature.Hot
            },
            new() {
                Id = 2,
                Description = "T-shirt / sweat / jean / basket",
                Style = Style.Relaxed,
                Weather = Temperature.Cold
            },
            new() {
                Id = 3,
                Description = "Chemise / pantalon / chaussure de ville",
                Style = Style.Professional,
                Weather = Temperature.Cold
            },
            new() {
                Id = 4,
                Description = "Polo / pantalon / basket",
                Style = Style.Professional,
                Weather = Temperature.Hot
            },
            new() {
                Id = 5,
                Description = "T-shirt / short / basket",
                Style = Style.Sporty,
                Weather = Temperature.Hot
            },
            new() {
                Id = 6,
                Description = "Costume / chaussure de ville",
                Style = Style.Professional,
                Weather = Temperature.Cold
            },
            new() {
                Id = 7,
                Description = "T-shirt / pull / pantalon / chaussure de ville",
                Style = Style.Relaxed,
                Weather = Temperature.Cold
            },
            new() {
                Id = 8,
                Description = "T-shirt / sweat / jogging / basket",
                Style = Style.Sporty,
                Weather = Temperature.Hot
            }
        ];

        public IEnumerable<Outfit> GetAllOutfits()
        {
            return outfitList;
        }

        public IEnumerable<Outfit> GetOutfitsWithParameters(double temperature)
        {
            List<Outfit> selectedOutfits = [];

            foreach (Outfit outfit in outfitList)
            {
                if (temperature >= 20 && outfit.Weather == Temperature.Hot)
                {
                    selectedOutfits.Add(outfit);
                }
                else if (temperature < 20 && outfit.Weather == Temperature.Cold)
                {
                    selectedOutfits.Add(outfit);
                }
            }

            return selectedOutfits;
        }

        public Outfit GetOutfitById(int outfitId)
        {
            throw new NotImplementedException();
        }
    }
}