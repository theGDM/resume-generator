import React, { useState } from 'react'
import { Box, Button, IconButton, TextField, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@emotion/react';
import { ThreeDots } from 'react-loader-spinner';
import { tokens } from '../theme';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { SetPortfolioLinks } from '../actions/ResumeDataAction';

function PortfolioLinks() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const colors = tokens(theme.palette.mode);
    const [github, setGithub] = useState("");
    const [leetcode, setLeetcode] = useState("");
    const [personalPortfolio, setPersonalPortfolio] = useState("");
    const [other, setOther] = useState("");
    const [isVerified, setVerified] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const verfifyPortfolioLinks = () => {
        if (personalPortfolio == '') {
            toast('Please enter portfolio link.');
            return;
        }

        let portfolioLinks = {
            portfolio: personalPortfolio,
            github: github,
            leetcode: leetcode,
            other: other,
        }

        dispatch(SetPortfolioLinks(portfolioLinks));
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
                    Portfolio links
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
                            Github
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setGithub(e.target.value)}
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
                            LeetCode
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setLeetcode(e.target.value)}
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
                            Personal portfolio
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setPersonalPortfolio(e.target.value)}
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
                            Others
                        </Typography>
                    }
                    FormHelperTextProps={{
                        style: {
                            color: colors.greenAccent[500],
                            fontSize: '1.3rem'
                        },
                    }}
                    onChange={(e) => setOther(e.target.value)}
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

                    onClick={verfifyPortfolioLinks}
                >
                    Verify
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

export default PortfolioLinks