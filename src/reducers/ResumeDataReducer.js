//maintaining the initial state for filters data
const initialState = {
    personalDetails: {},
    portfolioLinks: {},
    educations: [],
    experiences: [],
    certifications: [],
    skills: []
}

const ResumeDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PERSONAL_DETAILS':
            return {
                ...state,
                personalDetails: action.payload
            };

        case 'SET_PORTFOLIO_LINKS':
            return {
                ...state,
                portfolioLinks: action.payload
            };

        case 'SET_EDUCATIONS':
            return {
                ...state,
                educations: action.payload
            };

        case 'SET_EXPERIENCES':
            return {
                ...state,
                experiences: action.payload
            };

        case 'SET_CERTIFICATIONS':
            return {
                ...state,
                certifications: action.payload
            };

        case 'SET_SKILLS':
            return {
                ...state,
                skills: action.payload
            };

        default:
            return state;
    }
}

export default ResumeDataReducer;