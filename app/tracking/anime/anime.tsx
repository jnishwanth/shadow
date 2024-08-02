"use client";
import { jikanEndpoint } from "@/app/network/api/jikan";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const AnimeCard = ({ mal_id }: { mal_id: string }) => {
  const [data, setData] = useState<unknown>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jikanEndpoint + "anime/" + mal_id);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching from jikan API", error);
      }
    };
    fetchData();
  }, []);

  if (data) {
    return (
      <Card className={"size-fit"} >
        <CardTitle className={"text-center"}>{data.data.title}</CardTitle>
        <CardContent>
          <Image
            src={data.data.images.jpg.large_image_url}
            alt={data.data.title}
            width={108 * 3}
            height={192 * 3}
            // placeholder="blur"
            // blurDataURL={animeData.data.images.jpg.small_image_url}
          />
        </CardContent>
      </Card>
    );
  } else {
    return <p>Loading...</p>;
  }
};
