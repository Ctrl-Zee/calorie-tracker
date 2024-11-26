import { removeAllEntries } from "@/stores/CalorieStore";
import { useMutation } from "@tanstack/react-query";

export const useClearAll = () => {
  return useMutation({
    mutationFn: async () => {
      await removeAllEntries();
    },
  });
};
