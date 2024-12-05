export const EntryKeys = {
  all: ["entries"],
  detail: (id: string) => [...EntryKeys.all, { id }],
};

export const SettingsKeys = {
  all: ["settings"],
};
