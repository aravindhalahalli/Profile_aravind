import React, { Component } from 'react';
import Widecard from '../components/WideCard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.Tech Software Engineering" where="PESIT-BSC (PES University)" from="Aug 2015" to="July 2019" score="6.70 CGPA"/>
            <Widecard title="HSC/PUC" where="SB Ind PU College of Science" from="2014" to="2015" score="85.66"/>
            <Widecard title="SSLC" where="Sri Moraraji Desai Residential School" from="2012" to="2013" score="79.68"/>
            </div>
            )
        }
    }
    
export default Education