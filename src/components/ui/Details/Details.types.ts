export interface IDetails {
  directive: {
    type: string;
    entries: string[];
  };
  index: number;
  filter: () => string;
  detailsOpen: () => boolean;
  theme: string;
}
