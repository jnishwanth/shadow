import { useState } from "react";

export const jikanEndpoint = "https://api.jikan.moe/v4/";

// export const useCallApi = async (url: string) => {
//   const [data, setData] = useState<unknown>(null);
//   // const invoke = async () => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const jsonData = await response.json();
//     setData(jsonData);
//   } catch (error) {
//     console.error("Error fetching from jikan API", error);
//   }
//   return data;
// };
