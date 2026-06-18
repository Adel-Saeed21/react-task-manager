export interface TaskType {
  id: number;
  title: string;
  body: string;
  done?: boolean;
}

export type FilterType =
  | 'all'
  | 'done'
  | 'undone';