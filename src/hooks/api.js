import useFetch from "./useFetch";

export const useEntries = () => {
  return useFetch("https://travel-diary-api.anxoso.com/entries");
};
