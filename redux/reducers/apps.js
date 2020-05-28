const UPDATE_TOP_TEN = 'UPDATE_TOP_TEN';
const UPDATE_LEADERS_RACING = 'UPDATE_LEADERS_RACING';
const UPDATE_LEADERS_SHOOTING = 'UPDATE_LEADERS_SHOOTING';
const UPDATE_LEADERS_PUZZLE = 'UPDATE_LEADERS_PUZZLE';
const UPDATE_LEADERS_SPORTS = 'UPDATE_LEADERS_SPORTS';
const UPDATE_LEADERS_ADVENTURE = 'UPDATE_LEADERS_ADVENTURE';
// const UPDATE_LEADERS_MUSIC = 'UPDATE_LEADERS_MUSIC';
// const UPDATE_LEADERS_PRODUCTIVITY = 'UPDATE_LEADERS_PRODUCTIVITY';


const initialState = {
  topTen: '',
  leadersShooting: [],
  leadersPuzzle: [],
  leadersSports: [],
  leadersAdventure: [],
  leadersRacing: [],
  leadersMusic: [],
  leadersProductivity: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TOP_TEN:
      return Object.assign({}, state, {
        topTen: action.payload,
      });
    case UPDATE_LEADERS_RACING:
      return Object.assign({}, state, {
        leadersShooting: action.payload,
      });
    case UPDATE_LEADERS_SHOOTING:
      return Object.assign({}, state, {
        leadersPuzzle: action.payload,
      });
    case UPDATE_LEADERS_PUZZLE:
      return Object.assign({}, state, {
        leadersSports: action.payload,
      });
    case UPDATE_LEADERS_SPORTS:
      return Object.assign({}, state, {
        leadersAdventure: action.payload,
      });
    case UPDATE_LEADERS_ADVENTURE:
      return Object.assign({}, state, {
        leadersRacing: action.payload,
      });
    default:
      return state;
  }
}
