import { FC } from 'react';

export interface Case {
  name: string;
  path?: string;
  component: FC;
}
export interface Usage {
  name: string;
  cases: Case[];
}
