import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="max-w-7xl p-5 mx-auto">
      <h1 className=" text-4xl font-semibold mb-5 text-[#FF0000] text-center">
        Answer All Questions
      </h1>
      <div className="border p-5 rounded-xl shadow-lg mt-5">
        <h1 className="text-xl font-semibold">
          (1) = What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          An access token is a credential granted to a client application after
          successful authentication, allowing it to access protected resources.
          It is included in each request to the server. A refresh token, on the
          other hand, is a long-lived credential used to obtain a new access
          token when it expires. Access tokens are typically stored in memory or
          local storage on the client-side, while refresh tokens should be
          securely stored, such as in an HTTP-only cookie or encrypted storage,
          to prevent unauthorized access.
        </p>
      </div>
      <div className="border p-5 rounded-xl shadow-lg mt-5">
        <h1 className="text-xl font-semibold">
          (2) = Compare SQL and NoSQL databases?
        </h1>
        <p>
          SQL databases, also known as relational databases, store data in a
          structured manner using tables with predefined schemas. They enforce
          relationships between tables and offer powerful querying capabilities
          through SQL language. On the other hand, NoSQL databases, such as
          document stores or key-value stores, provide a flexible schemaless
          approach, allowing for dynamic and unstructured data. They offer
          horizontal scalability, high performance, and handle large amounts of
          data efficiently. NoSQL databases sacrifice strict consistency for
          high availability and partition tolerance. The choice between SQL and
          NoSQL depends on factors like data structure, scalability needs, and
          the importance of data consistency.
        </p>
      </div>
      <div className="border p-5 rounded-xl shadow-lg mt-5">
        <h1 className="text-xl font-semibold">
          (3) = What is express js? What is Nest JS?
        </h1>
        <p>
          Express.js is a popular web application framework for Node.js that
          simplifies the process of building server-side applications by
          providing a minimalist and flexible approach. It offers a robust set
          of features for routing, middleware handling, and request/response
          handling, allowing developers to quickly create RESTful APIs and web
          applications.
          <br />
          Nest.js, on the other hand, is a progressive and opinionated Node.js
          framework that is built on top of Express.js. It follows a modular and
          scalable architecture inspired by Angular, making it suitable for
          building enterprise-grade applications. Nest.js provides a powerful
          dependency injection system, decorators, and modules to structure and
          organize the codebase efficiently. It also supports TypeScript
          natively, enabling strong typing and enhanced developer productivity.
        </p>
      </div>
      <div className="border p-5 rounded-xl shadow-lg mt-5">
        <h1 className="text-xl font-semibold">
          (4) = What is MongoDB aggregate and how does it work?
        </h1>
        <p>
        MongoDB aggregate is a powerful framework that allows for advanced data processing and analysis within the database. It works by chaining together multiple stages to create a pipeline for data transformation and aggregation. Each stage performs specific operations, such as filtering, sorting, grouping, and computing aggregations. By utilizing the aggregation pipeline, developers can perform complex queries, perform calculations, join data from multiple collections, and generate custom reports in a highly efficient manner, all directly within the database.
        </p>
      </div>
    </div>
  );
};

export default Blog;
