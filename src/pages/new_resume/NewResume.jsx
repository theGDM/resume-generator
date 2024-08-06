import React, { useEffect, useState } from 'react';
import { Box, Button } from "@mui/material";
import { useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import PersonalDetails from '../../components/PersonalDetails';
import PortfolioLinks from '../../components/PortfolioLinks';
import Education from '../../components/Education';
import Experience from '../../components/Experience';
import Certification from '../../components/certification';
import Skill from '../../components/skill';
import { useNavigate } from 'react-router-dom';
import { createResume } from '../../services/api';
import { fetchResumesData } from '../../actions/ResumeFetchAction';

function NewResume() {
    let resumeData = useSelector((state) => state.resumeData);
    const theme = useTheme();
    const navigate = useNavigate();
    const colors = tokens(theme.palette.mode);
    const [isResumeCreated, setResumeCreated] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const user = localStorage.getItem("userEmail");
        if (!user) navigate("/");
    }, []);

    const handleResumeSubmit = async () => {
        let resume = {
            education: resumeData.educations,
            experience: resumeData.experiences,
            certifications: resumeData.certifications,
            skills: resumeData.skills,
            ...resumeData.personalDetails,
            ...resumeData.portfolioLinks,
        }


        setResumeCreated(true)
        let userId = localStorage.getItem('userId');
        console.log('resume', resume);
        await createResume(userId, resume);
        dispatch(fetchResumesData(userId));
        setResumeCreated(false);
        // navigate('/dashboard');
    }

    useEffect(() => {
        console.log(resumeData);
    }, [resumeData]);

    return (
        <Box width='100vw' >
            <Header />
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-around' alignItems='start' width='100%'>
                <PersonalDetails />
                <PortfolioLinks />
                <Education />
                <Experience />
                <Certification />
                <Skill />
            </Box>
            {isResumeCreated == false ? <Box display='flex' justifyContent='center' alignItems='center'>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: '3rem',
                        mb: '3rem',
                        mx: '10rem',
                        backgroundColor: colors.greenAccent[500],
                        "&:hover": {
                            backgroundColor: colors.greenAccent[600], // Set your desired hover color
                        },
                        fontSize: '1.2rem',
                        borderRadius: '0.2rem'
                    }}
                    onClick={handleResumeSubmit}
                >
                    Create Resume
                </Button>
            </Box> : <Box display='flex' justifyContent='center' alignItems='center'>
                <ThreeDots
                    height="8rem"
                    width="8rem"
                    radius="9"
                    color={colors.greenAccent[600]}
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </Box>}
        </Box >
    );
};

export default NewResume;
