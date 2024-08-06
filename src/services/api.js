import axios from 'axios';
import { toast } from 'react-toastify';
const baseURL = 'https://resume-generator-service.onrender.com';

export const register = async (fullName, email, password) => {
    try {
        let response = await axios.post(`${baseURL}/api/auth/register`, {
            fullName: fullName,
            email: email,
            password: password
        });

        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const signIn = async (email, password) => {
    try {
        let response = await axios.post(`${baseURL}/api/auth/login`, {
            email: email,
            password: password
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const createResume = async (userId, body) => {
    try {
        let response = await axios.post(`${baseURL}/api/resumes/${userId}`, body);
        toast('Resume created successfully!');
    } catch (err) {
        console.log(err);
        toast('Some error occured while creating the resume!');
    }
}

export const updateResume = async (resumeId, body) => {
    try {
        let response = await axios.put(`${baseURL}/api/resumes/${resumeId}`, body);
        toast('Resume updated successfully!');
    } catch (err) {
        console.log(err);
        toast('Some error occured while upadting the resume!');
    }
}

export const deleteResume = async (resumeId) => {
    try {
        let response = await axios.delete(`${baseURL}/api/resumes/${resumeId}`);
        toast('Resume deleted successfully created!');
    } catch (err) {
        console.log(err);
        toast('Some error occured while deleting the resume!');
    }
}


export const getAllResumes = async (userId) => {
    try {
        let response = await axios.get(`${baseURL}/api/resumes/${userId}/resume`);
        return response;
    } catch (err) {
        console.log(err);
        toast('Some error occured while getting the resumes!');
    }
}

export const getUser = async (email) => {
    try {
        let response = await axios.get(`${baseURL}/api/users/${email}`);
        return response.data;
    } catch (err) {
        console.log(err);
        toast('Some error occured while getting user!');
    }
}

