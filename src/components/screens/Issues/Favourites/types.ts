import { IssueInterface } from '../../../../redux/issues/types';

export interface Props {
  favouritesIssuesList: IssueInterface[];
  favouritesIssuesIDs: number[];
  toggleFavourite: (id: number) => void;
}
