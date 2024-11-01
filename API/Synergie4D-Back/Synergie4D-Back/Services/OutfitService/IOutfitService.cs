﻿using Synergie4D_Back.Models.Outfit;

namespace Synergie4D_Back.Services.OutfitService
{
    public interface IOutfitService
    {
        #region CRUD Outfit

        IEnumerable<Outfit> GetAllOutfits();

        IEnumerable<Outfit> GetOutfitsWithParameters(double temperature, string styleInput);

        #endregion CRUD Outfit
    }
}