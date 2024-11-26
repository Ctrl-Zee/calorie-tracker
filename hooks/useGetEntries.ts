import { EntryKeys } from "@/keys/QueryKeys";
import { getEntries } from "@/stores/CalorieStore";
import { useQuery } from "@tanstack/react-query";

export const useGetEntries = () => {
  return useQuery({
    queryKey: EntryKeys.all,
    queryFn: async () => {
      const entries = await getEntries();
      return entries;
    },
  });
};
