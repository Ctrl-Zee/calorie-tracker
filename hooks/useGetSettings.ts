import { SettingsKeys } from "@/keys/QueryKeys";
import { getSettings } from "@/stores/SettingStore";
import { useQuery } from "@tanstack/react-query";

export const useGetSettings = () => {
  return useQuery({
    queryKey: SettingsKeys.all,
    queryFn: async () => {
      const settings = await getSettings();
      return settings;
    },
  });
};
