import { getAllResumes } from "../services/api";

export const ResumeDataRequest = () => ({
    type: 'FETCH_RESUME_DATA_REQUEST',
});

export const ResumeDataSuccess = (data) => ({
    type: 'FETCH_RESUME_DATA_SUCCESS',
    payload: data,
});

export const ResumeDataFailure = (data) => ({
    type: 'FETCH_RESUME_DATA_FAILURE',
    payload: data,
});

export const fetchResumesData = (userId) => {
    return async (dispatch) => {
        try {
            let data_retries = 1;
            dispatch(ResumeDataSuccess([]));
            while (data_retries < 4) {
                dispatch(ResumeDataRequest());
                await getAllResumes(userId)
                    .then((response) => {
                        const resumesData = response.data;
                        console.log(resumesData);
                        if (resumesData === null || resumesData.length == 0) {
                            dispatch(ResumeDataSuccess([]));
                        } else {
                            dispatch(ResumeDataSuccess(resumesData));
                        }
                        data_retries = 4;
                    }).catch((err) => {
                        data_retries++;
                    });
            }
        } catch (err) {
            dispatch(ResumeDataFailure(err));
        }
    };
};