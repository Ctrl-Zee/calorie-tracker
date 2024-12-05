import { setSettings } from "@/stores/SettingStore";
import { useMutation } from "@tanstack/react-query";
import { Settings } from "@/types/Settings";

export const useSetSettings = () => {
  return useMutation({
    mutationFn: async (settings: Settings) => {
      await setSettings(settings);
    },
  });
};
