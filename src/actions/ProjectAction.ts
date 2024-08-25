import { IProject } from "../types"

export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST'
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
export const FETCH_PROJECTS_FAILURE= 'FETCH_PROJECTS_FAILURE'

export interface FetchProjectsRequestAction {
  type: typeof FETCH_PROJECTS_REQUEST;
}

export interface FetchProjectsSuccessAction {
  type: typeof FETCH_PROJECTS_SUCCESS;
  payload: IProject[];
}

export interface FetchProjectsFailureAction {
  type: typeof FETCH_PROJECTS_FAILURE;
  payload: Error;
}

export type ProjectActions = FetchProjectsRequestAction | FetchProjectsSuccessAction | FetchProjectsFailureAction;

export const fetchProjectsRequest = (): FetchProjectsRequestAction => ({
  type: FETCH_PROJECTS_REQUEST,
});
