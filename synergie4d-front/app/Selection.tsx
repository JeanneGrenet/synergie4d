"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function Selection() {
  const styles = ["Chic", "Décontracté", "Professionel", "Sportif"];
  const [selectedStyle, setSelectedStyle] = useState<string>();
  const [city, setCity] = useState("");

  const handleSubmit = async (e: HTMLFormElement) => {
    e.preventDefault();

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city, selectedStyle }),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="py-6 px-4">
      <form onSubmit={() => handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            {styles.map((style) => (
              <Button
                key={style}
                variant="outline"
                size="sm"
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </Button>
            ))}
          </div>
          <Button type="submit">Envoyer</Button>
        </div>
      </form>
    </div>
  );
}
