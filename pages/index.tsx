import { AppBar, Button, Card, CardActions, CardContent, Container, Grid, Icon, IconButton, Paper, Toolbar, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { styled } from '@mui/material/styles';
import { fontWeight, height } from '@mui/system';
import CvCard from '../components/cvcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const Home: NextPage = () => {

  const CustomBtn = styled(Button)({
    backgroundColor: 'transparent',
    color: "#FFF",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '#ea1c24',
    },
    '&:active': {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: '#ea1c24',
    }
  });


  return (
    <div>
      <Head>
        <title>Gianlorenzo Occhipinti</title>
        <meta name="description" content="Gianlorenzo Occhipinti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav data-sticky-wrap="true" data-sticky-class="stuck" style={{ opacity: 1, position: "fixed", top: 0, left: 0, width: "100%", color: "white" }}>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={4}>
            <CustomBtn variant="text" href="#home">Home</CustomBtn>
            <CustomBtn variant="text" href="#about">About</CustomBtn>
            <CustomBtn variant="text" href="#experiences">Experiences</CustomBtn>
            <CustomBtn variant="text" href="#projects">Projects</CustomBtn>
            <CustomBtn variant="text" href="#contacts">Contacts</CustomBtn>
          </Grid>
        </Grid>
      </nav>
      <Container style={{ marginTop: "30vh", height: "70vh" }} id="home">
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item md={6}>
            <div style={{ color: "white" }}>
              <p style={{ fontSize: "1.5em" }}> HI THERE 👋  I'M </p>
              <Typography variant="h1" component="h1" sx={{ fontWeight: 900 }}>
                Gianlorenzo Occhipinti
              </Typography>
              <Typography variant="h4" component="h4" sx={{ marginTop: 5 }}>
                Software Engineer 👨‍💻
              </Typography>
              <p>
                I'm a software engineer based in Switzerland, with passion for building and designing software.
              </p>
              <p>
              <IconButton aria-label="add an alarm">
                <EmailIcon />
              </IconButton>
              <IconButton  aria-label="add an alarm">
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="add an alarm">
                <LinkedInIcon />
              </IconButton>
            </p>
            </div>
          </Grid>
          <Grid item md={6}>
            <img src='/MemojiGianlo.png' alt='profile' style={{ width: "100%", height: "auto" }} id={"memoji-img"} />
          </Grid>
        </Grid>
      </Container>
      <Container id="about">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Typography variant="h3" component="h3" sx={{ marginTop: 5 }}>
            About me
          </Typography>
        </div>
        <Grid container
          direction="row"
          justifyContent="justify"
          alignItems="center"
        >
          <Grid item xs={6}>
            <img src="/FotoGianlo2.jpg" alt='profile' style={{ width: "50%", height: "auto" }} />
          </Grid>
          <Grid item xs={6}>
            I would consider myself as a curious person, always looking for inspiration, who likes to try new activities or new techs. Occasionally I play sports with my friends, and I’m a big fan of team-based games.
          </Grid>
        </Grid>
      </Container>

      <Container id="education">
        <div style={{ textAlign: "center", marginTop: 300 }}>
          <Typography variant="h3" component="h3" sx={{ marginTop: 5, marginBottom: 10 }}>
            <span style={{ border: "3px solid #fff", padding: 20 }}>Education</span>
          </Typography>

          <CvCard
            title={' MSc in Informatics'}
            overTitle={"October 2020 - July 2022 | Università della Svizzera Italiana | Università degli studi di Milano Bicocca"}
          >
            I had an experience in Lugano of one year as winner of a double degree scholarship.
            I worked on a thesis that aimed to provide an approach that represents the evolutionary process of a software in an interactive, visual and audible way.
          </CvCard>

          <CvCard
            title={'BSc in Informatics'}
            overTitle={"September 2017 - October 2020 | Università degli studi di Milano Bicocca"}
            link={"https://bestr.it/award/show/31SPeoYhQjSOCqKTLJXN3A"}
          >
            Graduated with 110/110 cum laude.<br />
            My thesis provided a study of a formula to compute the cost needed to solve an architectural smell in a software system.
          </CvCard>
        </div>
      </Container>

      <Container id="experiences">
        <div style={{ textAlign: "center", marginTop: 200 }}>
          <Typography variant="h3" component="h3" sx={{ marginTop: 5, marginBottom: 10 }}>
            <span style={{ border: "3px solid #fff", padding: 20 }}>Experiences</span>
          </Typography>

          <CvCard
            title={'My own sole proprietorship'}
            overTitle={'October 2018 - Ongoing'}
          >
            I opened my own sole proprietorship to have the possibility to accept side projects during my studies.
            Thanks to this experience I enhanced my social and technical skills since I had to handle many customers.
            Many times I successfully solved unexpected issues, even if I was working under high pressure.
          </CvCard>

        </div>
      </Container>

      <Container id="projects">
        <div style={{ textAlign: "center", marginTop: 200 }}>
          <Typography variant="h3" component="h3" sx={{ marginTop: 5, marginBottom: 10 }}>
            <span style={{ border: "3px solid #fff", padding: 20 }}>Projects</span>
          </Typography>

          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item md={4}>
              <Paper elevation={3} style={{ padding: 30, height: "100%" }}>
                <img src="https://mangayo.it/modules/an_logo/img/d5721895b0230eef211ba65f3bdc34cf.svg" style={{ backgroundColor: "#FFF", borderRadius: 5, height: 100, width: 100, padding: 5 }} />
                <br />
                MangaYo! is my most important client.
                I have been working with them since their first day. I helped them to go online and launch their business activity.
                Their business is constantly increasing (more than 8,000 monthly orders) and I'm currently working to expand the e-commerce features every day.
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Paper elevation={3} style={{ padding: 30, height: "100%" }}>
                <img src="/Arcan.png" style={{ height: 100, width: 100 }} />
                <br />
                Arcan is a startup born from a university research. I'm currently working with them in the visualization field leading the develop process of their user interface
              </Paper>

            </Grid>
            <Grid item md={4}>
              <Paper elevation={3} style={{ padding: 30, height: "100%" }}>
                <img src="/Dakimba.jpg" style={{ backgroundColor: "#FFF", borderRadius: 5, height: 100, width: 100, padding: 5 }} />
                <br />
                Dakimba.com was a start up with the aim to revolutionize the travel industry.
                Our project included a patent to automatize check in operations in hotel and bnb facilities (I'm currently the inventor) and also a platform to book rooms with the possibility to take a 3D tour of the room.
              </Paper>

            </Grid>
          </Grid>
        </div>
      </Container>
      <footer style={{ marginTop: 400 }}>
        <Container>
          <div> <p>© Copyright 2021. All right reserved</p> </div>
        </Container>
      </footer>
    </div>
  )
}

export default Home
