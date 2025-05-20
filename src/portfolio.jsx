import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  TextField,
  Paper,
  Divider,
  Stack,
  IconButton,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Link,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LayersIcon from "@mui/icons-material/Layers";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LanguageIcon from "@mui/icons-material/Language";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// Create a custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8a85ff",
      light: "#b4b1ff",
      dark: "#5d57cc",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff9a8a",
      light: "#ffc7bf",
      dark: "#c96c5d",
      contrastText: "#000",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 8 },
        contained: { boxShadow: "none" },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: "none", backgroundColor: "#1e1e1e" },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.23)" },
            "&:hover fieldset": { borderColor: "#8a85ff" },
          },
        },
      },
    },
  },
});

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionCard = motion.create(Card);
const MotionChip = motion.create(Chip);

const Portfolio = () => {
  const theme = darkTheme;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sections = ["about", "projects", "skills", "contact"];
  const sectionsRef = sections.map(() => React.createRef());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailjsCreds = {
    serviceId: "service_vfr9cpb",
    templateId: "template_phka74n",
    publicKey: "1EQEWRoYAplK4EmUI",
  };
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // contact.js or wherever you're submitting the form

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        emailjsCreds.serviceId,
        emailjsCreds.templateId,
        {
          name: formData.name,
          message: `${formData.message} sender: ${formData.email}`,
        },
        emailjsCreds.publicKey
      );
    } catch (error) {
      //   console.error("FAILED...", error);
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const skillGroups = [
    {
      title: "Backend",
      icon: <LayersIcon />,
      skills: ["Django", "Django REST", "Firebase", "MySQL", "PostgreSQL"],
    },
    {
      title: "Frontend",
      icon: <ComputerIcon />,
      skills: ["React", "Redux", "JavaScript", "HTML/CSS", "MUI"],
    },
    {
      title: "Languages",
      icon: <LanguageIcon />,
      skills: ["JavaScript", "Python", "Java", "C/C++", "SQL"],
    },
    {
      title: "CS Fundamentals",
      icon: <DeveloperBoardIcon />,
      skills: ["OOP", "Data Structures", "Algorithms", "State Management"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product browsing, cart functionality, and payment processing using Django REST Framework and React.",
      tech: ["React", "Django REST", "Firebase", "MySQL"],
      image: "MBL.png",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default" }}>
        {/* Header Section */}
        <MotionBox
          component="header"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
            color: "white",
            position: "relative",
            overflow: "hidden",
            p: { xs: 2, sm: 4 },
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Container maxWidth="md">
            <MotionTypography
              variant="h6"
              component="div"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              sx={{ mb: 2 }}
            >
              Hello, I'm
            </MotionTypography>
            <MotionTypography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              fontWeight="bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              sx={{ mb: 2 }}
            >
              Bechir Ebnou
            </MotionTypography>
            <MotionTypography
              variant={isMobile ? "h5" : "h4"}
              component="div"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              sx={{ mb: 4 }}
            >
              Full-Stack Developer
            </MotionTypography>
            <MotionBox
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton size="large" color="inherit">
                  <a
                    href="https://github.com/Bechir14"
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <GitHubIcon fontSize="large" />
                  </a>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <a
                    href="https://www.linkedin.com/in/mebnou14/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </a>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <EmailIcon
                    fontSize="large"
                    onClick={() => handleScroll(sectionsRef[3])}
                  />
                </IconButton>
              </Stack>
            </MotionBox>
          </Container>
          <MotionBox
            sx={{ position: "absolute", bottom: theme.spacing(4) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
          >
            <IconButton color="inherit" size="large" aria-label="scroll down">
              <ArrowDownwardIcon
                fontSize="large"
                onClick={() => handleScroll(sectionsRef[0])}
              />
            </IconButton>
          </MotionBox>
        </MotionBox>

        {/* About Section */}
        <Box
          ref={sectionsRef[0]}
          component="section"
          sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
        >
          <Container maxWidth="md">
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={6}
                sx={{ alignItems: "center", display: "flex" }}
              >
                <Box sx={{ flex: 1 }}>
                  <MotionBox variants={itemVariants}>
                    <Typography variant="h6" color="primary" gutterBottom>
                      About Me
                    </Typography>
                    <Typography
                      variant={isMobile ? "h4" : "h3"}
                      component="h2"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Building technology with purpose
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I'm a second-year Computer Science student at Aydin
                      University in Istanbul, passionate about creating elegant,
                      efficient, and user-friendly applications.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      My strong foundation in computer science fundamentals and
                      diverse programming languages gives me an edge in
                      understanding software development at a deeper level.
                    </Typography>
                    <Typography variant="body1">
                      When I'm not coding, you can find me training at the gym,
                      playing Assassin's Creed, or practicing my language skills
                      in French, Arabic, and Turkish.
                    </Typography>
                  </MotionBox>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MotionBox
                    variants={itemVariants}
                    sx={{
                      width: "100%",
                      display: "block", // Ensures the component is visible
                    }}
                  >
                    <Paper
                      elevation={6}
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        aspectRatio: "1/1", // Modern CSS aspect ratio (supported in most browsers)
                        width: "100%",
                        borderRadius: 4,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        // Fallback for browsers that don't support aspectRatio
                        minHeight: { xs: 250, sm: 300, md: 350 },
                      }}
                    >
                      <Box
                        borderRadius="25px"
                        border={`4px solid ${theme.palette.primary.main}`}
                        component="img"
                        src="IMG_2097.jpg"
                        alt="bechir ebnou"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // Maintains aspect ratio while filling container
                        }}
                      />
                    </Paper>
                  </MotionBox>
                </Box>
              </Stack>
            </MotionBox>
          </Container>
        </Box>

        {/* Education Section */}
        <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="md">
            <MotionBox
              textAlign="center"
              mb={8}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MotionTypography
                variant="h6"
                color="primary"
                gutterBottom
                variants={itemVariants}
              >
                My Education
              </MotionTypography>
              <MotionTypography
                variant={isMobile ? "h4" : "h3"}
                component="h2"
                gutterBottom
                fontWeight="bold"
                variants={itemVariants}
              >
                Academic Background
              </MotionTypography>
            </MotionBox>
            <MotionCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              sx={{
                mb: 4,
                borderLeft: `4px solid ${theme.palette.primary.main}`,
              }}
            >
              <CardContent>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 60,
                      height: 60,
                    }}
                  >
                    <SchoolIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      Computer Science
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Aydin University, Istanbul
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      2023 - Present
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Currently in my second year, focusing on programming
                      fundamentals, data structures, algorithms, and software
                      development.
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </MotionCard>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box
          ref={sectionsRef[2]}
          component="section"
          sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
        >
          <Container maxWidth="md">
            <MotionBox
              textAlign="center"
              mb={8}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MotionTypography
                variant="h6"
                color="primary"
                gutterBottom
                variants={itemVariants}
              >
                My Skills
              </MotionTypography>
              <MotionTypography
                variant={isMobile ? "h4" : "h3"}
                component="h2"
                gutterBottom
                fontWeight="bold"
                variants={itemVariants}
              >
                Technologies I work with
              </MotionTypography>
            </MotionBox>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {skillGroups.map((group, index) => (
                <MotionCard
                  key={index}
                  variants={itemVariants}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "calc(50% - 16px)",
                      md: "calc(25% - 24px)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          width: 60,
                          height: 60,
                        }}
                      >
                        {group.icon}
                      </Avatar>
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      align="center"
                    >
                      {group.title}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      justifyContent="center"
                      useFlexGap
                    >
                      {group.skills.map((skill, i) => (
                        <MotionChip
                          key={i}
                          label={skill}
                          size="medium"
                          sx={{
                            m: 0.5,
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                          }}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </MotionCard>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* Tools & Frameworks */}
        <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="md">
            <MotionBox
              textAlign="center"
              mb={8}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MotionTypography
                variant="h6"
                color="primary"
                gutterBottom
                variants={itemVariants}
              >
                Tools & Frameworks
              </MotionTypography>
              <MotionTypography
                variant={isMobile ? "h4" : "h3"}
                component="h2"
                gutterBottom
                fontWeight="bold"
                variants={itemVariants}
              >
                My Development Arsenal
              </MotionTypography>
            </MotionBox>
            <MotionCard
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardContent>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box
                    sx={{ flex: 1, textAlign: "center", mb: { xs: 3, sm: 0 } }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        width: 60,
                        height: 60,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <BuildIcon />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Development Tools
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Stack spacing={1}>
                      <Chip label="Git & GitHub" color="primary" />
                      <Chip label="VS Code" color="primary" />
                      <Chip label="Postman" color="primary" />
                      <Chip label="Docker" color="primary" />
                    </Stack>
                  </Box>
                  <Box
                    sx={{ flex: 1, textAlign: "center", mb: { xs: 3, sm: 0 } }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        width: 60,
                        height: 60,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <CodeIcon />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Frontend Frameworks
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Stack spacing={1}>
                      <Chip label="React" color="primary" />
                      <Chip label="Redux Toolkit" color="primary" />
                      <Chip label="Material UI" color="primary" />
                      <Chip label="Framer Motion" color="primary" />
                    </Stack>
                  </Box>
                  <Box
                    sx={{ flex: 1, textAlign: "center", mb: { xs: 3, sm: 0 } }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        width: 60,
                        height: 60,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <StorageIcon />
                    </Avatar>
                    <Typography variant="h6" gutterBottom>
                      Backend & Databases
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Stack spacing={1}>
                      <Chip label="Django REST Framework" color="primary" />
                      <Chip label="Node.js" color="primary" />
                      <Chip label="Firebase" color="primary" />
                      <Chip label="MySQL/PostgreSQL" color="primary" />
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </MotionCard>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box
          ref={sectionsRef[1]}
          component="section"
          sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
        >
          <Container maxWidth="lg">
            <MotionBox
              textAlign="center"
              mb={8}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MotionTypography
                variant="h6"
                color="primary"
                gutterBottom
                variants={itemVariants}
              >
                My Projects
              </MotionTypography>
              <MotionTypography
                variant={isMobile ? "h4" : "h3"}
                component="h2"
                gutterBottom
                fontWeight="bold"
                variants={itemVariants}
              >
                Recent Work
              </MotionTypography>
            </MotionBox>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {projects.map((project, index) => (
                <MotionCard
                  key={index}
                  variants={itemVariants}
                  sx={{
                    width: { xs: "100%", md: "calc(33.333% - 16px)" },
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src="MLB.png"
                    sx={{
                      objectFit: "cover",
                      height: { xs: 150, md: 200 },
                      bgcolor: theme.palette.primary.dark,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    {/* <DescriptionIcon sx={{ fontSize: { xs: 40, md: 60 } }} /> */}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                    >
                      {project.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      href={project.demo}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </MotionCard>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* Personal Interests Section */}
        <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="md">
            <MotionBox
              textAlign="center"
              mb={8}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MotionTypography
                variant="h6"
                color="primary"
                gutterBottom
                variants={itemVariants}
              >
                Beyond Coding
              </MotionTypography>
              <MotionTypography
                variant={isMobile ? "h4" : "h3"}
                component="h2"
                gutterBottom
                fontWeight="bold"
                variants={itemVariants}
              >
                Personal Interests
              </MotionTypography>
            </MotionBox>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <MotionCard
                variants={itemVariants}
                sx={{
                  width: { xs: "100%", md: "calc(33.333% - 16px)" },
                  borderRadius: 2,
                  p: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 70,
                      height: 70,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <SportsEsportsIcon sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    Gaming
                  </Typography>
                </Box>
                <Typography variant="body1" align="center">
                  Huge fan of Assassin's Creed and other video games that
                  combine rich storytelling with innovative technology.
                </Typography>
              </MotionCard>
              <MotionCard
                variants={itemVariants}
                sx={{
                  width: { xs: "100%", md: "calc(33.333% - 16px)" },
                  borderRadius: 2,
                  p: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 70,
                      height: 70,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <LanguageIcon sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    Languages
                  </Typography>
                </Box>
                <Typography variant="body1" align="center">
                  Fluent in French, Arabic, and Turkish. Passionate about
                  cultures and international communication.
                </Typography>
              </MotionCard>
              <MotionCard
                variants={itemVariants}
                sx={{
                  width: { xs: "100%", md: "calc(33.333% - 16px)" },
                  borderRadius: 2,
                  p: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                }}
              >
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 70,
                      height: 70,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <FitnessCenterIcon sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    Fitness
                  </Typography>
                </Box>
                <Typography variant="body1" align="center">
                  Dedicated to physical training and personal growth. I believe
                  in disciplined practice and continuous improvement.
                </Typography>
              </MotionCard>
            </Stack>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box
          ref={sectionsRef[3]}
          component="section"
          sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
        >
          <Container maxWidth="md">
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={6}
                sx={{
                  display: "flex",
                  alignItems: { xs: "stretch", md: "flex-start" },
                }}
              >
                <Box sx={{ flex: { xs: 1, md: 5 / 12 } }}>
                  <MotionBox variants={itemVariants}>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Contact Me
                    </Typography>
                    <Typography
                      variant={isMobile ? "h4" : "h3"}
                      component="h2"
                      gutterBottom
                      fontWeight="bold"
                    >
                      Let's talk about your project
                    </Typography>
                    <Typography variant="body1" paragraph>
                      I'm always open to discussing new projects, creative
                      ideas, or opportunities to be part of your vision.
                    </Typography>
                    <Stack spacing={3} sx={{ mt: 4 }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}
                        >
                          <EmailIcon />
                        </Avatar>
                        <Typography>mebnou14@gmail.com</Typography>
                      </Box>
                      <a
                        href="https://www.linkedin.com/in/mebnou14/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}
                          >
                            <LinkedInIcon />
                          </Avatar>
                          <Typography>linkedin.com/in/bechir-ebnou</Typography>
                        </Box>
                      </a>
                      <a
                        href="https://github.com/Bechir14"
                        target="_blank"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}
                          >
                            <GitHubIcon />
                          </Avatar>
                          <Typography>github.com/bechirebnou</Typography>
                        </Box>
                      </a>
                    </Stack>
                  </MotionBox>
                </Box>
                <Box sx={{ flex: { xs: 1, md: 7 / 12 } }}>
                  <MotionCard
                    variants={itemVariants}
                    sx={{ borderRadius: 2, overflow: "hidden" }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" gutterBottom>
                        Send a Message
                      </Typography>
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 3 }}
                      >
                        <Stack spacing={2}>
                          <TextField
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                            variant="outlined"
                          />
                          <TextField
                            fullWidth
                            id="email"
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            variant="outlined"
                          />
                          <TextField
                            fullWidth
                            id="message"
                            label="Your Message"
                            name="message"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleFormChange}
                            required
                            variant="outlined"
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ py: 1.5 }}
                          >
                            Send Message
                          </Button>
                        </Stack>
                      </Box>
                    </CardContent>
                  </MotionCard>
                </Box>
              </Stack>
            </MotionBox>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 6,
            bgcolor: "background.default",
            color: "text.primary",
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Bechir Ebnou
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full-Stack Developer based in Istanbul, Turkey. Specializing
                  in building exceptional digital experiences.
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Button
                    color="inherit"
                    sx={{ minWidth: 100 }}
                    onClick={() => {
                      handleScroll(sectionsRef[0]);
                    }}
                  >
                    About
                  </Button>
                  <Button
                    color="inherit"
                    sx={{ minWidth: 100 }}
                    onClick={() => {
                      handleScroll(sectionsRef[1]);
                    }}
                  >
                    Projects
                  </Button>
                  <Button
                    color="inherit"
                    sx={{ minWidth: 100 }}
                    onClick={() => {
                      handleScroll(sectionsRef[2]);
                    }}
                  >
                    Skills
                  </Button>
                  <Button
                    color="inherit"
                    sx={{ minWidth: 100 }}
                    onClick={() => {
                      handleScroll(sectionsRef[3]);
                    }}
                  >
                    Contact
                  </Button>
                </Stack>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Connect
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton color="primary">
                    <a
                      href="https://github.com/Bechir14"
                      target="_blank"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHubIcon />
                    </a>
                  </IconButton>
                  <IconButton color="primary">
                    <a
                      href="https://www.linkedin.com/in/mebnou14/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedInIcon />
                    </a>
                  </IconButton>
                  <IconButton color="primary">
                    <EmailIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
            <Box sx={{ mt: 6, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Bechir Ebnou. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
