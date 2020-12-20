import React from 'react';

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
                            BGS Institute of Technology
                        </p>
                        <p className="resume-card_details">Lorem ipsum, dolor sit amet consecteturibusdam et vitae natus dolores! Aliquid, a
                        </p>
                    </div>
                    </div>

                    <div className='col-lg-6 resume-card'>
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>

                    <div className="resume-card_body">
                        <h5 className='resume-card_title'
                        >Fresher
                        </h5>
                       
                    </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-lg-6 resume-languages">

                        <div className="resume-language_heading">
                            <h5 className="resume-language_heading">
                                Language and Framework
                            </h5>
                            <div className="resume-language_body">
                                {

                                }
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 resume-languages">

                        <div className="resume-language_heading">
                          <h5 className="resume-language_heading">
                               Language and Framework
                          </h5>
                      <div className="resume-language_body">
                         {

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