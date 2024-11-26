import { setEntry } from "@/stores/CalorieStore";
import { CalorieEntry } from "@/types/CalorieEntry";
import { useMutation } from "@tanstack/react-query";

export const useAddEntry = () => {
  return useMutation({
    mutationFn: async (entry: CalorieEntry) => {
      await setEntry(entry);
    },
  });
};
