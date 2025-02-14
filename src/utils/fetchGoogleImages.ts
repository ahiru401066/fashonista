// utils/fetchGoogleImages.ts
export const fetchGoogleImages = async (searchTerm: string) => {
   const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY; // Google Cloud Consoleで取得したAPIキー
   const searchEngineId = process.env.NEXT_PUBLIC_GOOGLE_CX; // CSEで取得したSearch Engine ID

   const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
         searchTerm
      )}&cx=${searchEngineId}&searchType=image&siteSearch=pinterest.com&key=${apiKey}`
   );

   if (!response.ok) {
      throw new Error('Failed to fetch images from Google Custom Search API');
   }

   const data = await response.json();
   return data.items || [];
};
