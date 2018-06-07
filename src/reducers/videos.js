import { SEARCH_VIDEO_SUCCESSFUL } from '../actions/youtube';

const initialState = {
  videoList: [{ item: 'madagascar' }, { item: 'Jay Chou' }, { item: 'Skrillex' }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VIDEO_SUCCESSFUL:
      return {
        ...state, videoList: action.videoList
      };
    default:
      return state;
  }
};

export default reducer;
