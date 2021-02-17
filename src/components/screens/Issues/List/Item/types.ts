import { IssueInterface } from '../../../../../redux/issues/types';

export interface Props {
  item: IssueInterface;
  favouritesIssues: number[];
  toggleFavourite: (id: number) => void;
}
