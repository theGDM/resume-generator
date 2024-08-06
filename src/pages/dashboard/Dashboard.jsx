import React, { useEffect, useRef } from 'react';
import { Container, Box, Typography, Avatar, Grid, Paper, Divider, Link, Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from '../../components/Header';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import newResume from '../../assets/create-new-resume.png';
import { useNavigate } from 'react-router-dom';
import { fetchResumesData } from '../../actions/ResumeFetchAction';
import { useDispatch, useSelector } from 'react-redux';
import { deleteResume } from '../../services/api';

function Dashboard() {
    const resumeRef = useRef();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let resumeFetchData = useSelector((state) => state.resumeFetchData);


    useEffect(() => {
        let userId = localStorage.getItem('userId');
        dispatch(fetchResumesData(userId));
    }, []);

    const handleDownloadPdf = async () => {
        const element = resumeRef.current;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('resume.pdf');
    };

    const handleCreateNewResume = () => {
        navigate('/new-resume');
    }

    const handleView = (cvData) => {
        navigate('/resume', { state: { cvData } });
    }

    const handleDelete = async (resumeId) => {
        await deleteResume(resumeId);
        let userId = localStorage.getItem('userId');
        dispatch(fetchResumesData(userId));
    }

    return (
        <Box>
            <Header />
            <Box display='flex' flexDirection='row' alignItems='center' m='2rem 1.6rem' flexWrap='wrap'>
                <Box width='25rem' height='15rem' bgcolor={colors.primary[400]} borderRadius='0.5rem' sx={{ cursor: 'pointer' }} p='1rem' m='1rem' boxShadow='0.2rem 0.2rem 0.8rem #000' display='flex' flexDirection='column' alignItems='center' justifyContent='center' onClick={handleCreateNewResume}>
                    <img src={newResume} style={{ height: '60%' }} />
                    <Typography fontSize='1.5rem' color={colors.greenAccent[400]} mt='0.5rem'>Create New Resume</Typography>
                </Box>
                {resumeFetchData.resumes.map((resume) => (
                    <Box width='25rem' height='15rem' bgcolor={colors.primary[400]} borderRadius='0.5rem' p='1rem' m='1rem' boxShadow='0.2rem 0.2rem 0.8rem #000' display='flex' flexDirection='column' alignItems='start' position='relative' >
                        <Typography fontSize='1.5rem' color={colors.greenAccent[400]} mt='0.5rem'>{resume.name}</Typography>
                        <Typography fontSize='1.3rem' color={colors.blueAccent[400]} mt='0.5rem'>{resume.shortDesc}</Typography>
                        <Box
                            position='absolute'
                            bottom='1rem'
                            right='1rem'
                            display='flex'
                            gap='0.5rem'
                            zIndex='10'
                        >
                            <Button

                                variant="contained"
                                sx={{
                                    mt: '1.5rem',
                                    mb: '1rem',
                                    backgroundColor: colors.greenAccent[600],
                                    "&:hover": {
                                        backgroundColor: colors.greenAccent[700], // Set your desired hover color
                                    },
                                    fontSize: '1.2rem',
                                    borderRadius: '0.2rem'
                                }}
                                onClick={() => handleView(resume)}
                            >
                                VIEW
                            </Button>
                            <Button
                                variant='contained'
                                sx={{
                                    mt: '1.5rem',
                                    mb: '1rem',
                                    backgroundColor: colors.redAccent[500],
                                    "&:hover": {
                                        backgroundColor: colors.redAccent[600], // Set your desired hover color
                                    },
                                    fontSize: '1.2rem',
                                    borderRadius: '0.2rem'
                                }}
                                onClick={() => handleDelete(resume._id)}
                            >
                                DELETE
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box >
    );
};

export default Dashboard;
