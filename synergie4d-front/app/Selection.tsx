import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Selection() {
  const styles = ["Professionel", "Décontracté", "Sportif", "Chic"];
  return (
    <div className="py-6 px-4">
      <div className="flex flex-col gap-4">
        <Input placeholder="Ville" />
        <div className="grid grid-cols-2 gap-4">
          {styles.map((style) => (
            <Button key={style} variant="outline" size="sm">
              {style}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
