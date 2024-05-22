"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { FormEvent, useState } from "react";

export default function Selection() {
  const styles = ["Chic", "Décontracté", "Professionel", "Sportif"];
  const [selectedStyle, setSelectedStyle] = useState<string>();
  const [city, setCity] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ city, selectedStyle }),
    // });

    // const data = await response.json();
    // console.log(data);
  };
  return (
    <div className="py-6 px-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            id="city"
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            {styles.map((style) => (
              <div key={style}>
                <input
                  type="radio"
                  id={style}
                  name="style"
                  value={style}
                  checked={selectedStyle === style}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="hidden"
                />
                <label
                  htmlFor={style}
                  className={`cursor-pointer rounded-md border px-4 py-2 flex flex-1 justify-center ${
                    selectedStyle === style
                      ? "bg-gray-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {style}
                </label>
              </div>
            ))}
          </div>
          <Button type="submit">Envoyer</Button>
        </div>
      </form>
    </div>
  );
}
