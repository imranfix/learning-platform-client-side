import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>1. What is cors?</Accordion.Header>
          <Accordion.Body>
          CORS (Cross-Origin Resource Sharing) is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need. Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>2. Why are you using firebase ? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>
                Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections. <br /> <br />

                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="0">
          <Accordion.Header>3. How does the private route work?</Accordion.Header>
          <Accordion.Body>
          The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="0">
          <Accordion.Header>4. What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
          Node.js is an open-source and cross-platform runtime environment built on Chrome's V8 JavaScript engine for executing JavaScript code outside of a browser. You need to recollect that NodeJS isn't a framework, and it's not a programing language. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript. <br /> <br />

          Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br /> <br />

            Node.js basically works on two concept <br />
            1. Asynchronous <br />
            2. Non-blocking I/O
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blog;