export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

// Action to sign in
export const signIn = (user) => ({
    type: SIGN_IN,
    payload: user,
});

// Action to sign out
export const signOut = () => ({
    type: SIGN_OUT,
});
