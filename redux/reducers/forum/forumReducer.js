import {
  UPDATE_FORUM_APPS,
  UPDATE_FORUM_APPS_SUCCESS,
  UPDATE_FORUM_FAILIURE,
  UPDATE_FORUM_THREAD,
  UPDATE_FORUM_THREAD_SUCCESS,
  UPDATE_FORUM_THREAD_FAILIURE,
  UPDATE_FORUM_COMMENTS,
  UPDATE_FORUM_COMMENTS_SUCCESS,
  UPDATE_FORUM_COMMENTS_FAILIURE
} from './actions';


const initialState = {
  error: '',
  forumApps: [],
  forumComments: []
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORUM_APPS:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_FORUM_APPS_SUCCESS:
      return {
        ...state,
        forumApps: action.payload,
        isLoading: true
      };
    case UPDATE_FORUM_FAILIURE:
      return {
        ...state,
        error: action.error.message,
        isLoading: true
      };
    case UPDATE_FORUM_THREAD:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_FORUM_THREAD_SUCCESS:
      return {
        ...state,
        forumThreads: action.payload,
        isLoading: true
      };
    case UPDATE_FORUM_THREAD_FAILIURE:
      return {
        ...state,
        error: action.error.message,
        isLoading: true
      };

    case UPDATE_FORUM_COMMENTS:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_FORUM_COMMENTS_SUCCESS:
      return {
        ...state,
        forumComments: action.payload,
        isLoading: true
      };
    case UPDATE_FORUM_COMMENTS_FAILIURE:
      return {
        ...state,
        error: action.error.message,
        isLoading: true
      };
    default:
      return state;
  }
}
