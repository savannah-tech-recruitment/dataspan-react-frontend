export type PokeMonData = {
  name: string;
  url: string;
};

export type PokeMonRes = {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokeMonData[];
  };
};
