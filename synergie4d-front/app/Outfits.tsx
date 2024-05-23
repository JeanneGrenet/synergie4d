"use client";
import React, { FormEvent, Key, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import Image from "next/image";

export type OutfitsProps = {
  id: Key,
  description:string,
  styles: Array<string>,
  weather: string,
  slug: string,
};

export type WeatherProps = {
city: string,
temperature: string,
weatherDescription: string
};

export default function Outfits() {
  const styles = [
    { id: "Chic", value: "Chic" },
    { id: "Relaxed", value: "Décontracté" },
    { id: "Professional", value: "Professionnel" },
    { id: "Sporty", value: "Sportif" },
  ];
  const [selectedStyle, setSelectedStyle] = useState<string>();
  const [city, setCity] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [outfits, setOutfits] = useState<Array<OutfitsProps>>();
  const [errorMessage, setErrorMessage] = useState('');
  const [weather, setWeather] = useState<WeatherProps>();

  const handleSubmit = async (e: FormEvent) => {
    setCurrentCity(capitalizeFirstLetter(city))
    setOutfits(undefined)
    setErrorMessage('')
    e.preventDefault();
    try{
      const response = await fetch(`https://localhost:7247/api/Outfits/GetWithParameters/${city}/${selectedStyle}`);
      setOutfits(await response.json());
    }catch (err) {
      setErrorMessage('Cette ville n\'est pas valide, veuillez réessayer');
    }
    try{
      const responseWeather = await fetch(`https://localhost:7247/api/Weather/?city=${city}`);
      setWeather(await responseWeather.json());
    }catch (err) {
      setErrorMessage('Impossible de récupérer la météo pour cette ville');
    }
  
  };

  return (
    <div className="py-6 px-4 mx-auto max-w-4xl flex flex-col gap-4 mb-10">
      <h2 className="text-lg text-center pb-4">Faites votre choix !</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            id="city"
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-primary"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            {styles.map((style) => (
              <div key={style.id}>
                <input
                  type="radio"
                  id={style.id}
                  name="style"
                  value={style.value}
                  checked={selectedStyle === style.id}
                  onChange={(e) => setSelectedStyle(e.target.id)}
                  className="hidden"
                />
                <label
                  htmlFor={style.id}
                  className={`cursor-pointer rounded-md border px-4 py-2 flex flex-1 justify-center ${
                    selectedStyle === style.id
                      ? "bg-gray-100 border-secondary"
                      : "bg-white border-primary"
                  }`}
                >
                  {style.value}
                </label>
              </div>
            ))}
          </div>
          {selectedStyle && city 
            ? <Button type="submit" className="text-black">
                Envoyer
              </Button>
            : <Button disabled className="text-black">
                Envoyer
              </Button> 
          }
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {(!!outfits && !!weather) && (
        <div className="flex flex-col gap-4">
          <p className="text-lg ">
            Il fait {weather.temperature} °C à <strong>{currentCity}</strong> nous vous proposons donc les
            tenues suivantes :
          </p>
        <div className="md:grid md:grid-cols-2 gap-4 flex flex-col">
          {outfits.map((outfit) => (
            <Card key={outfit.id}>
              <CardHeader>{outfit.description}</CardHeader>
              <CardContent className="flex justify-center"><Image src={`/outfits/${outfit.slug}.png`} alt={outfit.description} width={150} height={200}/></CardContent>
              <CardFooter className="flex gap-2">
                {outfit.styles.map((outfitStyle) => (
                  styles.map((style) => (
                   style.id === outfitStyle &&
                      <Badge className="text-black" key={outfitStyle}>
                      {style.value}
                      </Badge>
                  ))
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}
