using Synergie4D_Back.Models.Outfit;

namespace Synergie4D_Back.Services.OutfitService
{
    public interface IOutfitService
    {
        #region CRUD Outfit

        Outfit GetOutfitById(int outfitId);

        IEnumerable<Outfit> GetAllOutfits();

        #endregion CRUD Outfit
    }
}