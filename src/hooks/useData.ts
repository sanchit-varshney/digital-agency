import { useQuery } from "react-query";
import api from "../api";

export interface DataResponse {
  id: number;
  name: string;
  description: string;
}

const fetchData = async (): Promise<DataResponse[]> => {
  const { data } = await api.get("/data");
  return data;
};

export const useData = () => {
  return useQuery("data", fetchData, {
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    cacheTime: 10 * 60 * 1000, // Cache data for 10 minutes
  });
};
