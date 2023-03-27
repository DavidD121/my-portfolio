import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const personalDetails = {
    name: "David Danielian",
    location: "Watertown, MA",
    email: "daviddanielian3@gmail.com",
    availability: "Open for work",
    brand:
      "I'm a software engineer with a background in web development, robot control, and human-computer interaction. My unique background has honed my user-centered approach to problem solving and design. I am passionate about tech that makes our lives easier and creates unique experiences for people, including virtual/augmented reality, robotics, and game development.",
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <AnimatedRoutes personalDetails={personalDetails} />
      </ThemeProvider>
    </>
  );
}

export default App;
