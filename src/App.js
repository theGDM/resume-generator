import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/not_found/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import NewResume from "./pages/new_resume/NewResume";
import Resume from "./pages/resume/Resume";

const cvData = {
  name: 'Gyandeep Mehra',
  shortDesc: 'Aspring Software Engineer',
  phone: '+91 6565656565',
  email: 'pushkar.poonia@lernx.in',
  location: 'Jaipur, India',
  bio: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  education: [
    {
      course: 'Master of Business (MBA)',
      subject: 'Finance, Stock, FNO',
      institute: 'Icoderz - Ahmedabad, India',
      duration: '2019 - 2023',
    },
    {
      course: 'Class XII',
      subject: 'Physics, Chemistry, Maths, Computer Science',
      institute: 'Jawaher Navodaya Vidyalaya - Jabalpur, India',
      duration: '2017 - 2018',
    },
  ],
  experience: [
    {
      role: 'Crisis Intervention Specialist',
      duration: 'January 2023 - Present',
      company: 'Icoderz - Ahmedabad, India',
      acheivements: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    },
    {
      role: 'Software Engineer',
      period: 'January 2022 - December 2022',
      duration: 'Droame LLP, India',
      acheivements: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    },
  ],
  certifications: [
    {
      title: 'Flutter complete guide',
      type: 'Course',
      description: 'Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs',
    },
    {
      title: 'Web development Bootcamp',
      type: 'Course',
      description: 'Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs',
    },
    {
      title: 'UI/UX Designing',
      type: 'Course',
      description: 'Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs',
    },
  ],
  skills: [
    { name: 'HTML', level: 60 },
    { name: 'Figma', level: 80 },
    { name: 'CSS', level: 100 },
    { name: 'Flutter', level: 80 },
    { name: 'React.js', level: 70 },
  ],
};


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer progressClassName="toastProgress"
          bodyClassName="toastBody" position="top-right" autoClose={2000} />
        <div className="app">
          <main className="content">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/new-resume" element={<NewResume />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
