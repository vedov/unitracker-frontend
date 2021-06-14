import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS,
} from "./SignupTypes";

// define the initial state of the signup store
const initialState = {
  emailError: "",
  firstNameError: "",
  lastNameError: "",
  usernameError: "",
  passwordError: "",
  confirmpasswordError: "",
  isSubimtted: false,
};

// define how action will change the state of the store
export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUBMITTED:
      return {
        emailError: "",
        firstNameError: "",
        lastNameError: "",
        usernameError: "",
        passwordError: "",
        confirmpasswordError: "",
        isSubimtted: true,
      };
    case CREATE_USER_ERROR:
      const errorState = {
        emailError: "",
        firstNameError: "",
        lastNameError: "",
        usernameError: "",
        passwordError: "",
        confirmpasswordError: "",
        isSubimtted: false,
      };
      if (action.errorData.hasOwnProperty("username")) {
        errorState.usernameError = action.errorData["username"];
      }
      if (action.errorData.hasOwnProperty("password")) {
        errorState.passwordError = action.errorData["password"];
      }
      if (action.errorData.hasOwnProperty("confirm_password")) {
        errorState.confirmpasswordError = action.errorData["confirm_password"];
      }
      if (action.errorData.hasOwnProperty("first_name")) {
        errorState.firstNameError = action.errorData["first_name"];
      }
      if (action.errorData.hasOwnProperty("last_name")) {
        errorState.lastNameError = action.errorData["last_name"];
      }
      if (action.errorData.hasOwnProperty("email")) {
        errorState.emailError = action.errorData["email"];
      }
      return errorState;
    case CREATE_USER_SUCCESS:
      return {
        emailError: "",
        firstNameError: "",
        lastNameError: "",
        usernameError: "",
        passwordError: "",
        confirmpasswordError: "",
        isSubimtted: false,
      };
    default:
      return state;
  }
};
