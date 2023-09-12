import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {dayMonthFormatChanger} from "../tools/tools";


export type StateType = {
    camera: string;
    abbreviation: string;
    date: string;
};

const defaultDate = dayMonthFormatChanger(new Date())

const initialState: StateType = {
    camera: 'Front Hazard Avoidance Camera',
    abbreviation: '',
    date: defaultDate

};

const cameraAbbreviations: Record<string, string> = {
    'Front Hazard Avoidance Camera': 'FHAZ',
    'Rear Hazard Avoidance Camera': 'RHAZ',
    'Mast Camera': 'MAST',
    'Chemistry and Camera Complex': 'CHEMCAM',
    'Mars Hand Lens Imager': 'MAHLI',
    'Mars Descent Imager': 'MARDI',
    'Navigation Camera': 'NAVCAM',
    'Panoramic Camera': 'PANCAM',
    'Miniature Thermal Emission Spectrometer (Mini-TES)': 'MINITES',
};

const cameraSlice = createSlice({
    name: 'camera',
    initialState,
    reducers: {
        setSelectedCamera: (state, action: PayloadAction<string>) => {
            state.camera = action.payload;
            state.abbreviation = cameraAbbreviations[action.payload] || '';
        },
        setDate: (state, action: PayloadAction<string>) => {
            // dateFormatChanger(value)
            state.date = action.payload;
        },
    },
});

export const {setSelectedCamera, setDate} = cameraSlice.actions;
export default cameraSlice.reducer;

