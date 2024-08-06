import React, { useState } from 'react'
import { Box, Button, IconButton, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react';
import { ThreeDots } from 'react-loader-spinner';
import { tokens } from '../theme';
import { SetExperiences } from '../actions/ResumeDataAction';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

function Experience() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [duration, setDuration] = useState("");
    const [acheivements, setAcheivements] = useState("");
    const [isVerified, setVerified] = useState(false);
    const [experiences, setExperiences] = useState([]);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();

    const verfiyExperience = () => {
        if (role == '') {
            toast('Please enter the job role.');
            return;
        }

        if (company == '') {
            toast('Please enter the name of the compnay where you have worked for.');
            return;
        }

        if (duration == '') {
            toast('Please enter the job duration.');
            return;
        }

        if (acheivements == '') {
            toast('Please write down your acheivement in brief.');
            return;
        }

        let newExperience = {
            role: role,
            duration: duration,
            company: company,
            acheivements: acheivements
        }

        let tempExperience = [...experiences, newExperience];
        setExperiences(tempExperience);

        dispatch(SetExperiences(tempExperience));

        setRole('');
        setCompany('');
        setDuration('');
        setAcheivements('');
        toast('Details verified and added successfully.');
    }

    return (
        <Box display='flex' flexDirection='column' justifyContent='center'>
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
                            Experience
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
                            defaultValue={role}
                            type="text"
                            value={role}
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
                                    Job Role
                                </Typography>
                            }
                            FormHelperTextProps={{
                                style: {
                                    color: colors.greenAccent[500],
                                    fontSize: '1.3rem'
                                },
                            }}
                            onChange={(e) => setRole(e.target.value)}
                            autoFocus
                        />
                        <Box height='1rem'></Box>
                        <TextField
                            id="filled-required"
                            fullWidth
                            defaultValue={company}
                            type="text"
                            variant="filled"
                            value={company}
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
                                    Company/Organization
                                </Typography>
                            }
                            FormHelperTextProps={{
                                style: {
                                    color: colors.greenAccent[500],
                                    fontSize: '1.3rem'
                                },
                            }}
                            onChange={(e) => setCompany(e.target.value)}
                            autoFocus
                        />
                        <Box height='1rem'></Box>
                        <TextField
                            id="filled-required"
                            fullWidth
                            defaultValue="Jan 20xx - Mar 20xx"
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
                        <Box height='1rem'></Box>
                        <TextField
                            id="filled-required"
                            fullWidth
                            defaultValue={acheivements}
                            type="text"
                            variant="filled"
                            value={acheivements}
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
                                    Acheivements
                                </Typography>
                            }
                            FormHelperTextProps={{
                                style: {
                                    color: colors.greenAccent[500],
                                    fontSize: '1.3rem'
                                },
                            }}
                            onChange={(e) => setAcheivements(e.target.value)}
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

                            onClick={verfiyExperience}
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
                {experiences.map(exp => (
                    <Box width='30rem' bgcolor={colors.primary[700]} p='1rem' m='0.5rem 2rem'>
                        <Typography fontSize='1.4rem' color={colors.greenAccent[400]}>{exp.role}</Typography>
                        <Typography fontSize='1.3rem' color={colors.primary[200]}>{exp.duration}</Typography>
                    </Box>

                ))}
            </Box>
        </Box>


    )
}

export default Experience;