using Synergie4D_Back.Enums;
using System.Text.Json.Serialization;

namespace Synergie4D_Back.Models.Outfit
{
    public class Outfit
    {
        public int Id { get; set; }
        public string Description { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Style Style { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public Temperature Weather { get; set; }
        public string Slug { get; set; }
    }
}