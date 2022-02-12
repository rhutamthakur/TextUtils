import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>About Us</h1>
        <div
          className="accordion"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "light" ? "white" : "black",
          }}
          id="accordionExample"
        >
          <div
            className="card"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
          >
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className={`btn btn-${props.mode}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What does text analytics include?
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "light" ? "white" : "black",
              }}
            >
              <div className="card-body">
                Text Analytics involves information retrieval from unstructured
                data and the process of structuring the input text to derive
                patters and trends and evaluating and interpreting the output
                data.
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
          >
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className={`btn btn-${props.mode}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is the process of text analytics?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "light" ? "white" : "black",
              }}
            >
              <div className="card-body">
                Text analytics is the automated process of translating large
                volumes of unstructured text into quantitative data to uncover
                insights, trends, and patterns. Combined with data visualization
                tools, this technique enables companies to understand the story
                behind the numbers and make better decisions
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
          >
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className={`btn btn-${props.mode}`}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What are the types of textual analysis?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "light" ? "white" : "black",
              }}
            >
              <div className="card-body">
                There are four major approaches to textual analysis: rhetorical
                criticism, content analysis, interaction analysis, and
                performance studies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
