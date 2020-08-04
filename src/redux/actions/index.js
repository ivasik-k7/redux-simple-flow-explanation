export const ACTIONS = {
    CHANGE_FIRST_NAME: "CHANGE_FIRST_NAME",
    CHANGE_LAST_NAME: "CHANGE_LAST_NAME",
};

export const changeFirstname = (payload) => ({
    type: ACTIONS.CHANGE_FIRST_NAME,
    payload,
});

export const changeLastName = (payload) => ({
    type: ACTIONS.CHANGE_LAST_NAME,
    payload,
});
