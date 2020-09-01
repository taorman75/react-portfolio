import React from 'react';
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"
import Main from "./components/main";
import { Link } from "react-router-dom";
// import Footer from "./components/Footer"
// import NavBar from './components/NavBar';
// import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Tana Orman" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Tana Orman">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
      {/* <NavBar />
      <ProjectCard />
      <Footer /> */}
    </div>
  );
}

export default App;
