import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { useClearAll } from "@/hooks/useClearAll";
import { useQueryClient } from "@tanstack/react-query";
import { EntryKeys } from "@/keys/QueryKeys";
import { useTheme } from "react-native-paper";
import { useGetSettings } from "@/hooks/useGetSettings";
import SettingList from "@/features/settings/components/SettingList";
import SettingLink from "@/features/settings/components/SettingLink";
import { DEFAULT_DAILY_GOAL } from "@/types/Constants";
import Screen from "@/components/Screen";

const settingItems: JSX.Element[] = [
  <SettingLink
    icon="account"
    description="Profile"
    detail="2000 kal"
    link={{ pathname: "/settings/Profile" }}
  />,
  <SettingLink
    icon="palette"
    description="Theme"
    link={{ pathname: "/settings/Theme" }}
  />,
];

const Settings = () => {
  const { mutate: clearEntries } = useClearAll();
  const { data: settings } = useGetSettings();
  const queryClient = useQueryClient();
  const theme = useTheme();

  const settingItems: JSX.Element[] = useMemo(() => {
    return [
      <SettingLink
        icon="account"
        description="Profile"
        detail={`${settings?.profile.dailyCalories ?? DEFAULT_DAILY_GOAL} kal`}
        link={{ pathname: "/settings/Profile" }}
      />,
      <SettingLink
        icon="palette"
        description="Theme"
        link={{ pathname: "/settings/Theme" }}
      />,
    ];
  }, [settings?.profile.dailyCalories]);

  const handleClear = () => {
    clearEntries();
    queryClient.invalidateQueries({
      queryKey: EntryKeys.all,
    });
  };

  return (
    <Screen>
      {/* <IconButton icon="trash-can" mode={"contained"} onPress={handleClear} /> */}
      <SettingList items={settingItems} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default Settings;
