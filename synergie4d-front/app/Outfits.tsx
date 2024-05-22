"use client";
import React, { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Outfits() {
  const styles = [
    { id: "Chic", value: "Chic" },
    { id: "Relaxed", value: "Décontracté" },
    { id: "Professional", value: "Professionel" },
    { id: "Sporty", value: "Sportif" },
  ];
  const [selectedStyle, setSelectedStyle] = useState<string>();
  const [city, setCity] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // const response = await fetch("http://172.23.144.1:5000/api/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ city, selectedStyle }),
    // });

    // const data = await response.json();
    // console.log(data);

    fetchOutfits();
  };

  async function fetchOutfits() {
    const response = await fetch("https://localhost:7247/api/outfits/GetAll");
    console.log(response);
    const outfits = await response.json();
    console.log(outfits);
  }

  //   const outfits = [
  //     {
  //       id: 1,
  //       name: "Tenue 1",
  //       styles: ["Sportif", "Décontracté"],
  //       slug: "tenue-1",
  //     },
  //     {
  //       id: 2,
  //       name: "Tenue 2",
  //       styles: ["Professionnel", "Chic"],
  //       slug: "tenue-2",
  //     },
  //   ];
  const outfits = null;
  return (
    <div className="py-6 px-4 mx-auto max-w-4xl flex flex-col gap-4">
      <h2 className="text-lg text-center pb-4">Faites votre choix !</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            id="city"
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-primary"
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
          <Button type="submit" className="text-black">
            Envoyer
          </Button>
        </div>
      </form>
      {!!outfits && (
        <div className="flex flex-col gap-4">
          <p className="text-lg ">
            Selon la météo à <strong>{city}</strong> nous vous proposons les
            tenues suivantes :
          </p>

          {outfits.map((outfit) => (
            <Card key={outfit.id}>
              <CardHeader>{outfit.name}</CardHeader>
              <CardContent>Image de la tenue</CardContent>
              <CardFooter className="flex gap-2">
                {outfit.styles.map((style) => (
                  <Badge className="text-black" key={style}>
                    {style}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
