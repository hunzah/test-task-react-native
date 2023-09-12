import {createSelector} from "reselect";

const selectDate = (state) => state.camera.date;

export const getSelectedDate = createSelector(
    [selectDate],
    (date) => date
);
