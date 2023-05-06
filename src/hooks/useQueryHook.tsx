import { AxiosResponse } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { request } from "@/services/api";

async function getUsers(url:string) {
  const res = await request.get(url);
  return res;
}

const useQueryHook = (
  url: string,
  options: UseQueryOptions<AxiosResponse<any>, any> = {},
  params: object = {}
) => {
  console.log(url);
  
  return useQuery({
    queryKey: [url],
    queryFn: () => getUsers(url),
  });
};

export default useQueryHook;
