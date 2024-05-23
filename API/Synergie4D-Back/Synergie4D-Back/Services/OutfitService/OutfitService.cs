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
                Styles = ["Relaxed"],
                Weather = Temperature.Hot,
                Slug = "t-shirt-jean-basket"
            },
            new() {
                Id = 2,
                Description = "T-shirt / sweat / jean / basket",
                Styles = ["Relaxed"],
                Weather = Temperature.Cold,
                Slug = "t-shirt-sweat-jean-basket"
            },
            new() {
                Id = 3,
                Description = "Chemise / pantalon / chaussures de ville",
                Styles = ["Professional"],
                Weather = Temperature.Cold,
                Slug = "chemise-pantalon-chaussure-de-ville"
            },
            new() {
                Id = 4,
                Description = "Polo / jean / basket",
                Styles = ["Professional"],
                Weather = Temperature.Hot,
                Slug = "polo-jean-basket"
            },
            new() {
                Id = 5,
                Description = "T-shirt / short / basket",
                Styles = ["Sporty"],
                Weather = Temperature.Hot,
                Slug = "t-shirt-short-basket"
            },
            new() {
                Id = 6,
                Description = "Costume / chaussures de ville",
                Styles = ["Professional", "Chic"],
                Weather = Temperature.Cold,
                Slug = "costume-chaussure-de-ville",
            },
            new() {
                Id = 7,
                Description = "T-shirt / pull / pantalon / chaussures de ville",
                Styles = ["Relaxed"],
                Weather = Temperature.Cold,
                Slug = "t-shirt-pull-pantalon-chaussure-de-ville"
            },
            new() {
                Id = 8,
                Description = "T-shirt / sweat / jogging / basket",
                Styles = ["Sporty"],
                Weather = Temperature.Cold,
                Slug = "t-shirt-sweat-jogging-basket"
            },
            new() {
                Id = 8,
                Description = "Polo / pantalon / chaussures de ville",
                Styles = ["Professional","Chic"],
                Weather = Temperature.Hot,
                Slug = "polo-pantalon-chaussure-de-ville"
            }
        ];

        public IEnumerable<Outfit> GetAllOutfits()
        {
            return outfitList;
        }

        public IEnumerable<Outfit> GetOutfitsWithParameters(double temperature, string styleInput)
        {
            List<Outfit> selectedOutfits = [];

            foreach (Outfit outfit in outfitList)
            {
                foreach (string style in outfit.Styles)
                {
                    if (styleInput == style)
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
                }
            }

            return selectedOutfits;
        }
    }
}