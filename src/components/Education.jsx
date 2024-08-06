import React, { useState } from 'react'
import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react';
import { ThreeDots } from 'react-loader-spinner';
import { tokens } from '../theme';
import { SetEducations } from '../actions/ResumeDataAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Education() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [course, setCourse] = useState("");
    const [subject, setSubject] = useState("");
    const [institute, setInstitute] = useState("");
    const [duration, setDuration] = useState("");
    const [isVerified, setVerified] = useState(false);
    const [educations, setEducations] = useState([]);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();

    const verifyEducation = () => {
        if (course == '') {
            toast('Please enter the course name.');
            return;
        }

        if (subject == '') {
            toast('Please enter the subjects opted in the course.');
            return;
        }

        if (institute == '') {
            toast('Please enter the institute name.');
            return;
        }

        if (duration == '') {
            toast('Please enter the course duration.');
            return;
        }

        let newEducation = {
            course: course,
            subject: subject,
            institute: institute,
            duration: duration,
        }

        let tempEducation = [...educations, newEducation]
        setEducations(tempEducation);
        dispatch(SetEducations(tempEducation));

        setCourse('');
        setInstitute('');
        setDuration('');
        setSubject('');
        toast('Details verified and added successfully.');
    }

    return (
        <Box display='flex' flexDirection='column' justifyContent='center'>
            <Box width='30rem' bgcolor={colors.primary[400]} p='1rem 0' m='2rem 1rem'>
                <Box
                    width='100%'
                    p='0.5rem 1rem'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Typography
                        color='#000'
                        fontSize='1.8rem'
                        lineHeight='1.6'
                        color={colors.greenAccent[500]}
                    >
                        Education
                    </Typography>
                </Box>
                <Box height='0.1rem' bgcolor={colors.greenAccent[500]}></Box>
                <Box
                    sx={{ mt: '0.1rem' }}
                    width='35rem'
                    p='0rem 2rem'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    width='100%'
                >
                    <Box height='1rem'></Box>
                    <TextField
                        id="filled-required"
                        fullWidth
                        defaultValue={course}
                        value={course}
                        type="text"
                        variant="filled"
                        sx={{
                            backgroundColor: colors.primary[400],
                            '& .MuiInputBase-input': {
                                fontSize: '1.3rem', // Adjust the font size as needed
                                height: '2rem', // Adjust the height of the text area
                                padding: '2.5rem 1.2rem 0.8rem 1.2rem', // Adjust the padding as needed
                            },
                        }}
                        label={
                            <Typography
                                fontSize='1.3rem' sx={{ color: colors.greenAccent[500] }}
                            >
                                Course
                            </Typography>
                        }
                        FormHelperTextProps={{
                            style: {
                                color: colors.greenAccent[500],
                                fontSize: '1.3rem'
                            },
                        }}
                        onChange={(e) => setCourse(e.target.value)}
                        autoFocus
                    />
                    <Box height='1rem'></Box>
                    <TextField
                        id="filled-required"
                        fullWidth
                        defaultValue={subject}
                        type="text"
                        variant="filled"
                        value={subject}
                        sx={{
                            backgroundColor: colors.primary[400],
                            '& .MuiInputBase-input': {
                                fontSize: '1.3rem', // Adjust the font size as needed
                                height: '2rem', // Adjust the height of the text area
                                padding: '2.5rem 1.2rem 0.8rem 1.2rem', // Adjust the padding as needed
                            },
                        }}
                        label={
                            <Typography
                                fontSize='1.3rem' sx={{ color: colors.greenAccent[500] }}
                            >
                                Subject
                            </Typography>
                        }
                        FormHelperTextProps={{
                            style: {
                                color: colors.greenAccent[500],
                                fontSize: '1.3rem'
                            },
                        }}
                        onChange={(e) => setSubject(e.target.value)}
                        autoFocus
                    />
                    <Box height='1rem'></Box>
                    <TextField
                        id="filled-required"
                        fullWidth
                        defaultValue={institute}
                        type="text"
                        variant="filled"
                        value={institute}
                        sx={{
                            backgroundColor: colors.primary[400],
                            '& .MuiInputBase-input': {
                                fontSize: '1.3rem', // Adjust the font size as needed
                                height: '2rem', // Adjust the height of the text area
                                padding: '2.5rem 1.2rem 0.8rem 1.2rem', // Adjust the padding as needed
                            },
                        }}
                        label={
                            <Typography
                                fontSize='1.3rem' sx={{ color: colors.greenAccent[500] }}
                            >
                                Institute
                            </Typography>
                        }
                        FormHelperTextProps={{
                            style: {
                                color: colors.greenAccent[500],
                                fontSize: '1.3rem'
                            },
                        }}
                        onChange={(e) => setInstitute(e.target.value)}
                        autoFocus
                    />
                    <Box height='1rem'></Box>
                    <TextField
                        id="filled-required"
                        fullWidth
                        defaultValue={duration}
                        type="text"
                        value={duration}
                        variant="filled"
                        sx={{
                            backgroundColor: colors.primary[400],
                            '& .MuiInputBase-input': {
                                fontSize: '1.3rem', // Adjust the font size as needed
                                height: '2rem', // Adjust the height of the text area
                                padding: '2.5rem 1.2rem 0.8rem 1.2rem', // Adjust the padding as needed
                            },
                        }}
                        label={
                            <Typography
                                fontSize='1.3rem' sx={{ color: colors.greenAccent[500] }}
                            >
                                Duration
                            </Typography>
                        }
                        FormHelperTextProps={{
                            style: {
                                color: colors.greenAccent[500],
                                fontSize: '1.3rem'
                            },
                        }}
                        onChange={(e) => setDuration(e.target.value)}
                        autoFocus
                    />
                </Box>
                {isVerified == false ? <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' >
                    <Button
                        type="button"
                        variant="contained"
                        sx={{
                            mt: '1rem',
                            mb: '1rem',
                            mr: '1rem',
                            backgroundColor: colors.greenAccent[500],
                            "&:hover": {
                                backgroundColor: colors.greenAccent[600], // Set your desired hover color
                            },
                            fontSize: '1.2rem',
                            borderRadius: '0',
                        }}
                        onClick={verifyEducation}

                    >
                        Verify & Add
                    </Button>
                </Box>
                    : <Box display='flex' justifyContent='center' alignItems='center'>
                        <ThreeDots
                            height="4rem"
                            width="4rem"
                            radius="5"
                            color={colors.greenAccent[600]}
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </Box>
                }
            </Box>
            {educations.map(edu => (
                <Box width='30rem' bgcolor={colors.primary[700]} p='1rem' m='0.5rem 2rem'>
                    <Typography fontSize='1.4rem' color={colors.greenAccent[400]}>{edu.course}</Typography>
                    <Typography fontSize='1.3rem' color={colors.primary[200]}>{edu.duration}</Typography>
                </Box>

            ))}
        </Box>

    )
}

export default Education;