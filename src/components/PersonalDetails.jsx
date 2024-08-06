import React, { useState } from 'react'
import { Box, Button, IconButton, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react';
import { ThreeDots } from 'react-loader-spinner';
import { tokens } from '../theme';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { SetPersonalDetails } from '../actions/ResumeDataAction';

function PersonalDetails() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [fullName, setFullName] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [aboutYou, setAboutYou] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [location, setLocation] = useState("");
    const [isVerified, setVerified] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();

    const verfifyPersonalDetails = () => {
        if (fullName == '') {
            toast('Please enter the full name.');
            return;
        }

        if (shortDesc == '') {
            toast('Please enter the short description about you.');
            return;
        }

        if (aboutYou == '') {
            toast('Please enter your professional bio.');
            return;
        }

        if (mobileNumber == '') {
            toast('Please enter the mobile number.');
            return;
        }

        if (emailAddress == '') {
            toast('Please enter the email address.');
            return;
        }

        if (location == '') {
            toast('Please enter the location.');
            return;
        }

        let personalDetails = {
            name: fullName,
            shortDesc: shortDesc,
            phone: mobileNumber,
            email: emailAddress,
            location: location,
            bio: aboutYou,
        }

        dispatch(SetPersonalDetails(personalDetails));
        toast('Details verified and added successfully.');
    }

    return (
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
                    Personal Details
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
                    defaultValue=""
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
                            Full Name
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setFullName(e.target.value)}
                    autoFocus
                />
                <Box height='1rem'></Box>
                <TextField
                    id="filled-required"
                    fullWidth
                    defaultValue=""
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
                            Short Description
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setShortDesc(e.target.value)}
                    autoFocus
                />
                <Box height='1rem'></Box>
                <TextField
                    id="filled-required"
                    fullWidth
                    defaultValue=""
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
                            About You
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setAboutYou(e.target.value)}
                    autoFocus
                />
                <Box height='1rem'></Box>
                <TextField
                    id="filled-required"
                    fullWidth
                    defaultValue=""
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
                            Mobile number
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    autoFocus
                />
                <Box height='1rem'></Box>
                <TextField
                    id="filled-required"
                    fullWidth
                    defaultValue=""
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
                            Email Address
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    autoFocus
                />
                <Box height='1rem'></Box>
                <TextField
                    id="filled-required"
                    fullWidth
                    defaultValue=""
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
                            Location
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setLocation(e.target.value)}
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

                    onClick={verfifyPersonalDetails}
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
    )
}

export default PersonalDetails;