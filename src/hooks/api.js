import useFetch from "./useFetch";

export const useEntries = () => {
  return useFetch("https://travel-diary-api.anxoso.com/entries");
};

export const useEntry = (id) => {
  return useFetch(`https://travel-diary-api.anxoso.com/entries/${id}`);
};
