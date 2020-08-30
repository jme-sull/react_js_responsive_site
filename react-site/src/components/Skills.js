import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './Skills.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(50),
      },
    },
  }));

  


function Skills() {
    
    const classes = useStyles();
    return (
        <>
        <div className='skills-container' id='skills'>
            <h2>Tech Stack</h2>
            <div className='skils-wrapper'>
                <div className={classes.root}>
                  <Paper elevation={3}>
                    <div className='skills-inner-wrapper'>
                      <h3>Front End</h3>
                      <i class="fas fa-desktop"></i>
                      <ul>
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>LESS</li>
                        <li>Material UI</li>
                      </ul>
                    </div> 
                  </Paper>
                  <Paper elevation={3}>
                    <div className='skills-inner-wrapper'>
                        <h3>Back End</h3>
                        <i class="fas fa-server"></i>
                        <ul>
                        <li>Java/Spring</li>
                        <li>RESTful APIs</li>
                        <li>Node.js</li>
          
                      </ul>
                    </div> 
                  </Paper>
                  <Paper elevation={3}>
                    <div className='skills-inner-wrapper'>
                        <h3>Other Tech</h3>
                        <i class="fas fa-briefcase"></i>
                        <ul>
                          <li>Git</li>
                          <li>GitHub</li>
                          <li>Command Line</li>
                          <li>SalesForce</li>
                          <li>HubSpot</li>
                          <li>InDesign</li>
                        </ul>
                    </div> 
                </Paper>
              </div>
            </div>
        </div>
        </>
    )
}

export default Skills
