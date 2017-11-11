import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import information from './userInf.json';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
class App extends Component {

    featchEducationFromJson() {
        const array=[];

        information.education.map((item,i)=>{

            array.push(<Education item={item}/>);
        });
        return array;
    }
    fetchLanguageFromJson() {

        const array=[];

        information.language.map((item,i)=>{

            array.push(<li>{item.lang} <span className="lang-desc">({item.langDesc})</span></li>);
        });
        return array;
    }
    fetchInterestsFromJson() {

        const array=[];

        information.interests.map((item,i)=>{

            array.push(<li>{item}</li>);
        });
        return array;
    }
    fetchExpiriencesFromJson() {

        const array=[];

        information.experiences.map((item,i)=>{

            array.push(<Experiences item={item}></Experiences>);
        });
        return array;
    }
    fetchProjectFromJson() {

        const array=[];

        information.projects.map((item,i)=>{

            array.push(<Projects item={item}></Projects>);
        });
        return array;
    }
    fetchSkillsFromJson() {

        const array=[];

        information.skills.map((item,i)=>{

            array.push(<Skills item={item}></Skills>);
        });
        return array;
    }

  render() {

    return (
        <div className="wrapper">
            <div className="sidebar-wrapper">
                <div className="profile-container">
                    <img className="profile" style={{width: '150px'}} src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAt1AAAAJDg2ZmIwMjliLTFmNTctNDZhOC1hNzYxLWIyMjhlODJjNjY2Yg.jpg" alt="" />
                    <h1 className="name">{information.name+' '+ information.lastname}</h1>
                    <h3 className="tagline">{information.tagline}</h3>
                </div>

                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fa fa-envelope"></i><a href="mailto: jorganovicd@gmail.com">{information.email}</a></li>
                        <li className="phone"><i className="fa fa-phone"></i><a href={information.phone}>{information.phone}</a></li>
                        <li className="linkedin"><i className="fa fa-linkedin"></i><a href={information.linkedin} target="_blank">linkedin.com/in/dejan</a></li>
                        <li className="github"><i className="fa fa-github"></i><a href={information.github} target="_blank">github.com/dejannnn</a></li>
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>

                    {this.featchEducationFromJson()}
                </div>

                <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        {this.fetchLanguageFromJson()}
                    </ul>
                </div>

                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        {this.fetchInterestsFromJson()}
                    </ul>
                </div>

            </div>

            <div className="main-wrapper">

                {/*<section className="section summary-section">*/}
                    {/*<h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>*/}
                    {/*<div className="summary">*/}
                        {/*<p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>*/}
                    {/*</div>*/}
                {/*</section>*/}

                <section className="section experiences-section">
                    <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
                    {this.fetchExpiriencesFromJson()}
                </section>

                <section className="section projects-section">
                    <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                    {this.fetchProjectFromJson()}
                </section>

                <section className="skills-section section">
                    <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                    <div className="skillset">
                        {this.fetchSkillsFromJson()}
                    </div>
                </section>

            </div>
            <footer className="footer">
                <div className="text-center">

                    <small className="copyright">Designed with <i className="fa fa-heart"></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                </div>
            </footer>
        </div>

  );
  }
}

export default App;
