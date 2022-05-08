import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="container blogContainer">
      <div className="row justify-content-start">
        <div className="col-12 col-md-9 blogs py-3 my-element">
          <h4>
            <span className="text-danger">Ques:</span>
            Difference between javascript and nodejs
          </h4>
          <p>
            <span className="text-primary fw-bolder">Ans:</span>
            <span className="fw-bold my-2">
              Difference between JavaScript and Nodejs:
            </span>{" "}
            <br />
            <table class="table table-success table-striped my-2">
              <thead>
                <tr>
                  <th>#</th>
                  <th>JavaScript</th>
                  <th>Nodejs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>#</th>
                  <td>
                    Javascript is a programming language that is used for
                    writing scripts on the website.{" "}
                  </td>
                  <td>NodeJS is a Javascript runtime environment.</td>
                </tr>
                <tr>
                  <th>#</th>
                  <td>Javascript can only be run in the browsers.</td>
                  <td>
                    We can run Javascript outside the browser with the help of
                    NodeJS.
                  </td>
                </tr>
                <tr>
                  <th>#</th>
                  <td>Javascript is basically used on the client-side.</td>
                  <td>NodeJS is mostly used on the server-side.</td>
                </tr>
                <tr>
                  <th>#</th>
                  <td>
                    Javascript is capable enough to add HTML and play with the
                    DOM.
                  </td>
                  <td>Nodejs does not have capability to add HTML tags.</td>
                </tr>
                <tr>
                  <th>#</th>
                  <td>Javascript is used in frontend development.</td>
                  <td>Nodejs is used in server-side development.</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-12 col-md-9 blogs py-3 my-element-right">
          <h4>
            <span className="text-danger">Ques:</span>
            When should you use nodejs and when should you use mongodb?
          </h4>
          <p>
            <span className="text-primary fw-bolder">Ans:</span>
            We use node js to build server that can respond to web requests.
            Node.js is a single-threaded, open-source, c ross-platform runtime
            environment for building fast and scalable server-side and
            networking applications. It runs on the V8 JavaScript runtime
            engine, and it uses event-driven, non-blocking I/O architecture,
            which makes it efficient and suitable for real-time applications.
            <br />
            <span className="my-2 d-block">
              NoSQL databases like MongoDB are a good choice when our data is
              document-centric and doesn't fit well into the schema of a
              relational database, when we need to accommodate massive scale,
              when we are rapidly prototyping, and a few other use.
            </span>
          </p>
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col-12 col-md-9 blogs py-3 my-element">
          <h4>
            <span className="text-danger">Ques:</span>
            Differences between SQL and NoSQL databases.
          </h4>
          <p>
            <span className="text-primary fw-bolder">Ans:</span>
            <span className="fw-bold my-2">
              Differences between SQL and NoSQL databases:
            </span>{" "}
            <br />
            <table class="table table-success table-striped my-2">
              <thead>
                <tr>
                  <th>#</th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>#</th>
                  <td>
                    SQL databases have fixed or static or predefined schema
                  </td>
                  <td>NoSQL have dynamic schema</td>
                </tr>
                <tr>
                  <th>#</th>
                  <td>
                    SQL databases are not suited for hierarchical data storage.
                  </td>
                  <td>
                    NoSQL databases are best suited for hierarchical data
                    storage.
                  </td>
                </tr>
                <tr>
                  <th>#</th>
                  <td>SQL databases are best suited for complex queries</td>
                  <td>NoSQL databases are not so good for complex queries</td>
                </tr>
                <tr>
                  <th>#</th>
                  <td>SQL databases is vertically Scalable</td>
                  <td>NoSQL databases is horizontally scalable</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
