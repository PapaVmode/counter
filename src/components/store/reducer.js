const INCREASE = 'INCREASE';
const RESET_NUMBER = 'RESET_NUMBER';
const SETTING_VALUES = 'SETTING_VALUES';
const SET_VALUES = 'SET_VALUES';
const SAVE_STATE = 'SAVE_STATE';


const initialState = {
  'prikol': [{
    value: 0,
    maxValue: 0,
    startValue: 0,
    incBut: true,
    resetBut: true,
    setBut: true,
    classValue: false,
    inputClass: false,
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        prikol: state.prikol.map(v => {
          v.value = v.value + 1
          if (v.value === v.maxValue) {
            return {
              ...v,
              value: v.maxValue,
              classValue: true,
              incBut: true,
              resetBut: false,
            }
          } else if (v.value < v.maxValue) {
            return {
              ...v,
              value: v.value
            }
          }
          else {
            return {
              ...v,
              value: 0,
              classValue: true,
              incBut: true,
            }
          }
        })
      }
    case RESET_NUMBER:
      return {
        ...state,
        prikol: state.prikol.map(v => {
          return {
            ...v,
            value: v.startValue,
            incBut: false,
            classValue: false,
            resetBut: true,
          }
        })
      }
    case SETTING_VALUES:
      return {
        ...state,
        prikol: state.prikol.map(t => {
          if (action.start < 0) {
            return {
              ...t,
              startValue: -1,
              value: 'Incorrect value!',
              classValue: true,
              setBut: true,
              inputMaxClass: true,
              inputStartClass: true,
              resetBut: true,
              incBut: true,
            }
          } if (action.max < 0) {
            return {
              ...t,
              maxValue: -1,
              value: 'Incorrect value!',
              classValue: true,
              setBut: true,
              inputMaxClass: true,
              inputStartClass: true,
              resetBut: true
            }
          } if (action.start === t.maxValue || action.max === t.startValue) {
            if (action.start === 0 || action.start === t.maxValue) {
              return {
                ...t,
                startValue: t.maxValue,
                value: 'Incorrect value!',
                classValue: true,
                setBut: true,
                inputMaxClass: true,
                inputStartClass: true,
                incBut: true,
                resetBut: true,
              }
            } else {
              return {
                ...t,
                maxValue: action.max,
                value: 'Incorrect value!',
                classValue: true,
                setBut: true,
                inputMaxClass: true,
                inputStartClass: true,
                incBut: true,
                resetBut: true,
              }
            }
          } if (action.start > t.maxValue) {
            return {
              ...t,
              startValue: t.startValue,
              setBut: true,
              value: 'Incorrect value!',
              classValue: true,
              inputMaxClass: true,
              inputStartClass: true
            }
          } if (action.start < t.maxValue) {
            return {
              ...t,
              startValue: action.start,
              value: 'enter values and press "set"',
              classValue: false,
              inputMaxClass: false,
              inputStartClass: false,
              setBut: false,
              incBut: true,
              resetBut: true,
            }
          }
          if (action.max < t.startValue) {
            return {
              ...t,
              maxValue: action.max,
              setBut: true,
              value: 'Incorrect value!',
              classValue: true,
              inputMaxClass: true,
              inputStartClass: true
            }
          } if (action.max > t.startValue) {
            if (action.max === 0) {
              return {
                ...t,
                maxValue: action.max,
              }
            } if (t.startValue < 0) {
              return {
                ...t,
                maxValue: action.max,
              }
            }
            return {
              ...t,
              maxValue: action.max,
              value: 'enter values and press "set"',
              classValue: false,
              inputMaxClass: false,
              inputStartClass: false,
              setBut: false,
              incBut: true,
              resetBut: true,
            }
          } else {
            return {
              ...t
            }
          }
        }
        )
      }
    case SET_VALUES:
      return {
        ...state,
        prikol: state.prikol.map(t => {
          return {
            ...t,
            value: t.startValue,
            setBut: true,
            incBut: false,
            resetBut: true,
            classValue: false
          }
        })
      }
    case SAVE_STATE:
      debugger
      return {
        ...state,
        prikol: [action.state]
      }
  }
  return state;
}


export const increaseAC = () => ({ type: INCREASE });
export const resetNumberAC = () => ({ type: RESET_NUMBER });
export const settingValuesAC = (max, start) => ({ type: SETTING_VALUES, max, start });
export const setValuesAC = () => ({ type: SET_VALUES });
export const saveStateAC = (state) => ({ type: SAVE_STATE, state })



export default reducer;