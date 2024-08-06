import React, { useState } from 'react'
import { Box, Button, IconButton, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react';
import { ThreeDots } from 'react-loader-spinner';
import { tokens } from '../theme';
import { SetSkills } from '../actions/ResumeDataAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Skill() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [title, setTitle] = useState("");
    const [rate, setRating] = useState(0);
    const [isVerified, setVerified] = useState(false);
    const [skills, setSkillList] = useState([]);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();

    const verfiySkill = () => {
        if (title == '') {
            toast('Please enter the certification title.');
            return;
        }

        if (rate == '') {
            toast('Please enter the type of certification.');
            return;
        }

        let newSkill = {
            name: title,
            level: rate,
        }

        let tempSkills = [...skills, newSkill];
        setSkillList(tempSkills);
        dispatch(SetSkills(tempSkills));

        setTitle('');
        SetSkills(0);
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
                        Skill
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
                        defaultValue={title}
                        type="text"
                        variant="filled"
                        value={title}
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
                                Title
                            </Typography>
                        }
                        FormHelperTextProps={{
                            style: {
                                color: colors.greenAccent[500],
                                fontSize: '1.3rem'
                            },
                        }}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                    <Box height='1rem'></Box>
                    <TextField
                        id="filled-required"
                        fullWidth
                        defaultValue={rate}
                        type="number"
                        value={rate}
                        min='0'
                        variant="filled"
                        inputProps={{ min: 0, max: 10 }}
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
                                Rate yourself out of 10
                            </Typography>
                        }
                        FormHelperTextProps={{
                            style: {
                                color: colors.greenAccent[500],
                                fontSize: '1.3rem'
                            },
                        }}
                        onChange={(e) => setRating(e.target.value)}
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

                        onClick={verfiySkill}
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
            {skills.map(skill => (
                <Box width='30rem' bgcolor={colors.primary[700]} p='1rem' m='0.5rem 2rem'>
                    <Typography fontSize='1.4rem' color={colors.greenAccent[400]}>{skill.name}</Typography>
                    <Typography fontSize='1.3rem' color={colors.primary[200]}>{skill.level}</Typography>
                </Box>

            ))}
        </Box>
    )
}

export default Skill;