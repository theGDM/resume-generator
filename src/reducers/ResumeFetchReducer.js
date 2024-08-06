//maintaing the initial states for jobData
const initialState = {
    loading: false,
    resumes: [],
    error: '',
}

const ResumeFetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RESUME_DATA_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'FETCH_RESUME_DATA_SUCCESS':
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                resumes: action.payload,
            };

        case 'FETCH_RESUME_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default ResumeFetchDataReducer;