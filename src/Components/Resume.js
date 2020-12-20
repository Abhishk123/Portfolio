import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from '../Components/Bar'


const languages=[
    {
        icon:react,
        name:'C',
        level: '75'
    },
    {
        icon:react,
        name:'Java',
        level: '65'
    },
    {
        icon:react,
        name:'HTML',
        level: '75'
    },
    {
        icon:react,
        name:'CSS',
        level: '60'
    },
    {
        icon:python,
        name:'Python',
        level: '60'
    },
    {
        icon:react,
        name:'Javascript',
        level: '50'
    }
]


const tools=[
    {
        icon:react,
        name:'Android Studio',
        level: '70'
    },
    {
        icon:react,
        name:'Eclipse',
        level: '60'
    },
    {
        icon:react,
        name:'MS Word',
        level: '75'
    },
    {
        icon:python,
        name:'Pycharm',
        level: '40'
    }
]

const Resume = () => {
    return (
        <div>
            <div className="containerr resume">
                <div className="row">
                    <div className='col-lg-6 resume-card'>
                    <h4 className="resume-card_heading">
                        Education
                    </h4>

                    <div className="resume-card_body">
                        <h5 className='resume-card_title'
                        >Computer Science and Engineering
                        </h5>
                        <p className='resume-card_name'>
                            BGS Institute of Technology(2017-2021)
                        </p>
                        <p className="resume-card_details">I am currently persuing B.E in Computer Science and
                        Engineering from BGS Institute of Technology.
                        </p>
                    </div>
                    </div>

                    <div className='col-lg-6 resume-card'>
                    <h4 className="resume-card_heading">
                        Career Objective
                    </h4>

                    <div className="resume-card_body">
                        <p className='resume-card_title'
                        >To gain good experience in the software field, to develop more and more societal
                        useful applications. To solve the real world problems using existing technology and
                        to work with the well experienced team in a good position.
                        </p>
                       
                    </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-lg-6 resume-languages">

                        <div className="resume-language_heading">
                            <h5 className="resume-language_heading">
                                Technical Skills
                            </h5>
                            <div className="resume-language_body mt-3">
                                {
                                    languages.map(language=>
                                        <Bar value={language}/>)

                                }
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 resume-languages">

                        <div className="resume-language_heading">
                          <h5 className="resume-language_heading">
                               Tools and Softwares
                          </h5>
                      <div className="resume-language_body mt-3">
                         {
                             tools.map(tool=>
                               <Bar value={tool}/>
                                )

                         }
                      </div>
                        </div>

                      </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;