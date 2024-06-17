// src/server/types/index.ts
export interface Set {
  id: number;
  repetitions: number;
  weight: number;
}

export interface Exercise {
  id: number;
  name: string;
  date: string;  
  sets: Set[];
}