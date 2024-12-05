export type Settings = {
  profile: Profile;
  theme: Theme;
};

export type Profile = {
  dailyCalories: number;
  name?: string;
  age?: number;
  weight?: number;
  height?: number;
};

export type Theme = "light" | "dark" | "automatic";
