import React from "react";
// import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Flask_skill",
          content: "Flask",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Django_skill",
          content: "Django",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "PHP_skill",
          content: "PHP", 
          porcentage: "65%", 
          value: "65" 
        },
        {
          id: "Laravel_skill",
          content: "Laravel",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Docker_skill",
          content: "Docker",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Ansible_skill",
          content: "Ansible",
          porcentage: "10%",
          value: "10"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            `
            Hi, I am your friend and partner DREY. \n\n
            My goal is to help you solve your data cleaning task and to transform your unstructured data into a form easy to use and understand
            If you have a dataset and you would like it cleaned and converted to a nice format,then I am your
            guy.
            `
        },
        {
          id: "second-p-about",
          content:
            `
            The challenges I focus on include \n\n
            - Data Cleaning in python
            - Data Analysis(EDA,Descriptive Analysis)
            - Convert dataset to csv,excel,tsv,etc
            - Simple web scraping
            `
        },
        {
          id: "third-p-about",
          content:
            `
            What will you get? \n\n
            
            \t- Your challenge fixed
            \t- Cleaned Data-set
            \t- Periodical Support of the work
            \t- Fast delivery per complexity of data-set
            \t- And More
            `
        },
        {
          id: "fird-p-about",
          content:
            `
            What's the process?
            
            - Please send all the required details and sample data-set
            - Within a set time, I will send you the cleaned dataset to appraise
            - You evaluate the work and determine any changes that you want implemented
            - I will make the necessary revisions and resubmit them for final approval
            
            Please I would be glad if you message me before placing an order.
            Let's get in touch today
            `
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      
                      <div className="lead"> 
                      
                        <p>
                          Hi, I am your friend and partner DREY. <br/>
                          My goal is to help you solve your data cleaning task and to transform your unstructured data into a form easy to use and understand
                          If you have a dataset and you would like it cleaned and converted to a nice format, then I am your
                          guy.
                        </p>
                          
                        <p>
                          <b>The challenges I focus on include</b> <br/>
                          <li>Data Cleaning in python</li>
                          <li>Data Analysis</li>
                          <li>Convert dataset to csv,excel,tsv,etc</li>
                          <li>Simple web scraping</li>
                          <br/>
                          
                          <b>What will you get?</b> <br/>                          
                          <li>Your challenge fixed</li>
                          <li>Cleaned Data-set</li>
                          <li>Periodical Support of the work</li>
                          <li>Fast delivery per complexity of data-set</li>
                          <li>And More</li>
                        </p>
                          
                        <p>
                          <b>What's the process?</b> <br/>                            
                          <li>Please send all the required details and sample data-set</li>
                          <li>Within a set time, I will send you the cleaned dataset to appraise</li>
                          <li>You evaluate the work and determine any changes that you want implemented</li>
                          <li>I will make the necessary revisions and resubmit them for final approval</li>
                          
                          Please I would be glad if you message me before placing an order.
                          Let's get in touch today
                        </p>
                          
                        
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
