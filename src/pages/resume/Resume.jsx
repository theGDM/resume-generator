import React, { useEffect, useRef } from 'react';
import { Container, Box, Typography, Avatar, Grid, Paper, Divider, Link, Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { styled } from '@mui/system';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Header from '../../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Sidebar = styled(Paper)({
    height: '100%',
    backgroundColor: '#6C63FF',
    padding: '2rem',
    color: 'white',
    height: '100%',
});

const Content = styled(Box)({
    padding: '2rem',
    width: '100%'
});


const SkillsBar = styled(Box)(({ percentage }) => ({
    height: '1rem',
    width: '100%',
    backgroundColor: '#fff',
    border: '0.2rem solid #fff',
    overflow: 'hidden',
    '&::after': {
        content: '""',
        display: 'block',
        height: '100%',
        width: `${percentage * 10}%`,
        backgroundColor: '#6C63FF',
    },
}));

const PartialUnderlineTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    '&::after': {
        content: '""',
        display: 'block',
        width: '4rem', // Adjust this to make the underline longer or shorter
        height: '0.35rem',
        backgroundColor: '#6C63FF', // Change to the desired color
        position: 'absolute',
        bottom: '-0.2rem',
        left: '0',
    },
}));


const PartialUnderlineTypographySideBar = styled(Typography)(({ theme }) => ({
    position: 'relative',
    '&::after': {
        content: '""',
        display: 'block',
        width: '4rem', // Adjust this to make the underline longer or shorter
        height: '0.35rem',
        backgroundColor: '#fff', // Change to the desired color
        position: 'absolute',
        bottom: '-0.2rem',
        left: '0',
    },
}));

const Resume = () => {
    const resumeRef = useRef();
    const location = useLocation();
    const { cvData } = location.state || {};
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    const handleBackNavigaton = () => {
        navigate('/dashboard');
    }

    useEffect(() => {
        const user = localStorage.getItem("userEmail");
        if (!user) navigate("/");
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

    return (
        <Box width='100vw' display='flex' flexDirection='column' alignItems='center'>
            <Header />
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' my='3rem' >
                <Button
                    type="button"
                    variant="contained"
                    sx={{
                        mt: '0.3rem',
                        mb: '0.2rem',
                        backgroundColor: colors.greenAccent[600],
                        "&:hover": {
                            backgroundColor: colors.greenAccent[700], // Set your desired hover color
                        },
                        fontSize: '1.2rem',
                        borderRadius: '0.2rem'
                    }}
                    onClick={handleBackNavigaton}
                >
                    BACK
                </Button>
                <Box width='1.5rem'></Box>
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                    <Button
                        type="button"
                        variant="contained"
                        sx={{
                            mt: '0.3rem',
                            mb: '0.2rem',
                            backgroundColor: colors.greenAccent[600],
                            "&:hover": {
                                backgroundColor: colors.greenAccent[700], // Set your desired hover color
                            },
                            fontSize: '1.2rem',
                            borderRadius: '0.2rem'
                        }}
                        onClick={handleDownloadPdf}
                    >
                        DOWNLOAD RESUME
                    </Button>
                </Box>
            </Box>
            <Box width='210mm' maxHeight='297mm' backgroundColor='#EDEAFF' mb='4rem' color='#000' mx='auto' ref={resumeRef}>
                <Grid container >
                    <Grid item xs={4}>
                        <Sidebar sx={{ borderRadius: 0 }}>
                            <Avatar
                                src={cvData.profileImage}
                                sx={{ width: 100, height: 100, margin: 'auto', mt: '1.5rem', mb: ' 0.8rem', border: '0.4rem solid #fff' }}
                            />
                            <Typography fontSize='1.5rem' fontWeight='600' textTransform='' mb='0.2rem' letterSpacing='0.05rem' textAlign='center'>
                                {cvData.name}
                            </Typography>
                            <Typography fontSize='1.2rem' textAlign='center'>
                                {cvData.shortDesc}
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            {/* <PartialUnderlineTypographySideBar fontSize='1.8rem' fontWeight='600' textTransform='' mb='1.2rem' letterSpacing='0.06rem'>
                                Portfolio links
                            </PartialUnderlineTypographySideBar>
                            <Box>

                            </Box> */}
                            {/* <Divider sx={{ my: 2 }} /> */}
                            <PartialUnderlineTypographySideBar fontSize='1.8rem' fontWeight='600' textTransform='' mb='1.2rem' letterSpacing='0.06rem' >
                                Contact Details
                            </PartialUnderlineTypographySideBar>
                            <Box mb='1rem'>
                                <Box display='flex' flexDirection='row' alignItems='center' mb='0.2rem'>
                                    <SmartphoneOutlinedIcon sx={{ mr: '0.5rem', fontSize: '1.6rem' }} />
                                    <Typography fontSize='1.2rem'>Phone</Typography>
                                </Box>
                                <Typography fontSize='1.2rem'>{cvData.phone}</Typography>
                            </Box>
                            <Box mb='1rem'>
                                <Box display='flex' flexDirection='row' alignItems='center' mb='0.2rem'>
                                    <EmailOutlinedIcon sx={{ mr: '0.5rem', fontSize: '1.6rem' }} />
                                    <Typography fontSize='1.2rem'>Email</Typography>
                                </Box>
                                <Typography fontSize='1.2rem'>{cvData.email}</Typography>
                            </Box>
                            <Box mb='1rem'>
                                <Box display='flex' flexDirection='row' alignItems='center' mb='0.2rem'>
                                    <FmdGoodOutlinedIcon sx={{ mr: '0.5rem', fontSize: '1.6rem' }} />
                                    <Typography fontSize='1.2rem'>Location</Typography>
                                </Box>
                                <Typography fontSize='1.2rem'>{cvData.location}</Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <PartialUnderlineTypographySideBar fontSize='1.8rem' fontWeight='600' textTransform='' mb='1.2rem' letterSpacing='0.06rem'>
                                Skills
                            </PartialUnderlineTypographySideBar>
                            {cvData.skills.map((skill) => (
                                <Box key={skill.name} mb={2} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' >
                                    <Box width='10rem' display='flex' flexDirection='row' justifyContent='start'>
                                        <Typography fontSize='1.3rem'>{skill.name}</Typography>
                                    </Box>
                                    <SkillsBar percentage={skill.level} />
                                </Box>
                            ))}
                        </Sidebar>
                    </Grid>
                    <Grid item xs={8} width='100%'>
                        <Content>
                            <PartialUnderlineTypography fontSize='1.8rem' fontWeight='600' textTransform='' mb='1.2rem' letterSpacing='0.06rem'>
                                About me
                            </PartialUnderlineTypography>
                            <Typography fontSize='1.2rem' color='#444' letterSpacing='0.5'>
                                {cvData.bio}
                            </Typography>
                            <Divider sx={{ my: '2rem' }} />
                            <PartialUnderlineTypography fontSize='1.8rem' fontWeight='600' textTransform='' mb='1.2rem' letterSpacing='0.06rem' >
                                Education
                            </PartialUnderlineTypography>
                            {cvData.education.map((edu) => (
                                <Box display='flex' flexDirection='row' width='100%'>
                                    <SchoolIcon sx={{ mr: '1rem', color: '#6C63FF', fontSize: '3rem' }} />
                                    <Box key={edu.course} mb={2}>
                                        <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' width='100%'>
                                            <Typography fontSize='1.4rem' fontWeight="bold" letterSpacing='0.3'>
                                                {edu.course}
                                            </Typography>
                                            <Typography fontSize='1.2rem' color='#6C63FF' letterSpacing='0.3'>
                                                {edu.duration}
                                            </Typography>
                                        </Box>
                                        <Typography fontSize='1.3rem' color='#767676' fontWeight='600' letterSpacing='0.3'>
                                            {edu.institute}
                                        </Typography>
                                        <Typography fontSize='1.3rem' color='#444' letterSpacing='0.3'>{edu.subject}</Typography>
                                    </Box>
                                </Box>
                            ))}
                            <Divider sx={{ my: 2 }} />
                            <PartialUnderlineTypography fontSize='1.8rem' fontWeight='600' textTransform='' mb='1.2rem' letterSpacing='0.06rem' >
                                Experience
                            </PartialUnderlineTypography>
                            {cvData.experience.map((exp) => (
                                <Box display='flex' flexDirection='row'>
                                    <WorkIcon sx={{ mr: '1rem', color: '#6C63FF', fontSize: '3rem' }} />
                                    <Box key={exp.role} mb={2}>
                                        <Typography fontSize='1.4rem' fontWeight="bold" letterSpacing='0.3'>
                                            {exp.role}
                                        </Typography>
                                        <Typography fontSize='1.3rem' color='#767676' fontWeight='300' letterSpacing='0.3'>
                                            {exp.duration}
                                        </Typography>
                                        <Typography fontSize='1.3rem' color='#767676' fontWeight='600' mb='1rem' letterSpacing='0.3'>
                                            {exp.company}
                                        </Typography>
                                        <Typography fontSize='1.2rem' color='#444' letterSpacing='0.3'>
                                            {exp.acheivements}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                            <Divider sx={{ my: 2 }} />
                            <PartialUnderlineTypography fontSize='1.8rem' fontWeight='600' textTransform='' mb='1.2rem' letterSpacing='0.06rem' >
                                Certifications
                            </PartialUnderlineTypography>
                            {cvData.certifications.map((cert) => (
                                <Box key={cert.title} mb={2}>
                                    <Typography fontSize='1.4rem' fontWeight="bold" letterSpacing='0.3'>
                                        {cert.title}
                                    </Typography>
                                    <Typography fontSize='1.2rem' color='#767676' fontWeight='600' letterSpacing='0.3'>Type: {cert.type}</Typography>
                                    <Typography fontSize='1.2rem' color='#444' letterSpacing='0.3'>{cert.description}</Typography>
                                </Box>
                            ))}
                        </Content>
                    </Grid>
                </Grid>
            </Box >
        </Box>
    );

};

export default Resume;
