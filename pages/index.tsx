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
import LinkBtn from '../components/LinkBtn';
import MenuBtn from '../components/MenuBtn';

const Home: NextPage = () => {



  return (
    <>
      <Head>
        <title>Gianlorenzo Occhipinti</title>
        <meta name="description" content="Gianlorenzo Occhipinti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav style={{ opacity: 1, top: 0, left: 0, width: "100%", color: "white", backgroundColor: "#212121", padding: 10}}>
        <Grid container>
          <Grid item xs={7}></Grid>
          <Grid item xs={5} className={"desk-only"}>
            <MenuBtn variant="text" href="#home">Home</MenuBtn>
            <MenuBtn variant="text" href="#about">About</MenuBtn>
            <MenuBtn variant="text" href="#experiences">Experiences</MenuBtn>
            <MenuBtn variant="text" href="#projects">Projects</MenuBtn>
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
                <a href="mailto:gianlorenzo.occhipinti@gmail.com">
                  <IconButton aria-label="add an alarm" >
                    <EmailIcon />
                  </IconButton>
                </a>
                <IconButton aria-label="add an alarm" href="https://github.com/Gianlo98" target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="add an alarm" href="https://www.linkedin.com/in/gianlorenzo-o/" target="_blank">
                  <LinkedInIcon />
                </IconButton>
              </p>
            </div>
          </Grid>
          <Grid item md={6} className={"desk-only"}>
            <img src='/MemojiGianlo.png' alt='profile' style={{ width: "100%", height: "auto" }} id={"memoji-img"} />
          </Grid>
        </Grid>
      </Container>
      <Container id="about">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <Typography variant="h3" component="h3" sx={{ marginTop: 5, marginBottom: 10 }}>
            <span style={{ border: "3px solid #fff", padding: 20 }}>About me</span>
          </Typography>
        </div>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} style={{ textAlign: "center" }}>
            <img src="/FotoGianlo.jpg" alt='profile' style={{ width: "50%", height: "auto" }} />
          </Grid>
          <Grid item xs={5} style={{ fontSize: "1.1em" }} >
            <p>
              I'm Gianlorenzo Occhipinti, a software engineer with front-end and back-end skills.
              I am passionate about leveraging my knowledge to decipher challenging problems and create delightful experiences.
              In addition, I am a curious person, always looking for inspiration, who likes to try new activities or new techs.
            </p>
            <p>
              I like to develop the architecture of software and the implementation of its logic.
            </p>
            <p>
              Being a diligent, hardworking, and result-oriented software engineer, I always work towards achieving the best result on each project I lay my hands on.
            </p>

            <LinkBtn variant="text">Download CV</LinkBtn>
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
              <a href="https://mangayo.it" target="_blank">
                <Paper elevation={3} style={{ padding: 30, height: "100%" }}>
                  <img src="https://mangayo.it/modules/an_logo/img/d5721895b0230eef211ba65f3bdc34cf.svg" style={{ backgroundColor: "#FFF", borderRadius: 5, height: 100, width: 100, padding: 5 }} />
                  <p>
                    MangaYo! is my most important client.
                    I have been working with them since their first day. I helped them to go online and launch their business activity.
                    Their business is constantly increasing (more than 8,000 monthly orders) and I'm currently working to expand the e-commerce features every day.
                  </p>
                </Paper>
              </a>
            </Grid>
            <Grid item md={4}>
              <a href="https://arcan.tech" target="_blank">
                <Paper elevation={3} style={{ padding: 30, height: "100%" }}>
                  <img src="/Arcan.png" style={{ height: 100, width: 100 }} />
                  <p>
                    Arcan is a startup born from a university research.
                    I'm currently working with them in the visualization field leading the develop process of their user interface
                  </p>
                </Paper>
              </a>
            </Grid>
            <Grid item md={4}>
              <Paper elevation={3} style={{ padding: 30, height: "100%" }}>
                <img src="/Dakimba.jpg" style={{ backgroundColor: "#FFF", borderRadius: 5, height: 100, width: 100, padding: 5 }} />
                <p>
                  Dakimba.com was a start up with the aim to revolutionize the travel industry.
                  Our project included a patent to automatize check in operations in hotel and bnb facilities (I'm currently the inventor)
                  and also a platform to book rooms with the possibility to take a 3D tour of the room.

                </p>
              </Paper>

            </Grid>
          </Grid>
        </div>
      </Container>
      <footer style={{ marginTop: 400, padding: 100 }}>
        <Container>
          <Grid container>
          <Grid item xs={10}>
            <p>© Copyright 2022. All right reserved</p>
          </Grid>
          <Grid item xs={2}>
          <a href="mailto:gianlorenzo.occhipinti@gmail.com">
                  <IconButton aria-label="add an alarm" >
                    <EmailIcon />
                  </IconButton>
                </a>
                <IconButton aria-label="add an alarm" href="https://github.com/Gianlo98" target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton aria-label="add an alarm" href="https://www.linkedin.com/in/gianlorenzo-o/" target="_blank">
                  <LinkedInIcon />
                </IconButton>
          </Grid>
        </Grid>
        </Container>
      </footer>
    </>
  )
}

export default Home
