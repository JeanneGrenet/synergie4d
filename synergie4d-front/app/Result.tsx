import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Result() {
  const outfits = [
    {
      id: 1,
      name: "Tenue 1",
      styles: ["Sportif", "Décontracté"],
      slug: "tenue-1",
    },
    {
      id: 2,
      name: "Tenue 2",
      styles: ["Professionnel", "Chic"],
      slug: "tenue-2",
    },
  ];
  const city = "Rouen";
  return (
    <div className="py-6 px-4 flex flex-col gap-4">
      <p className="text-lg ">
        Selon la météo à <strong>{city}</strong> nous vous proposons les tenues
        suivantes :
      </p>
      {outfits.map((outfit) => (
        <Card key={outfit.id}>
          <CardHeader>{outfit.name}</CardHeader>
          <CardContent>Image de la tenue</CardContent>
          <CardFooter className="flex gap-2">
            {outfit.styles.map((style) => (
              <Badge key={style}>{style}</Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
