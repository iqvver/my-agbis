import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Search = ({ placeholder }) => {
  return (
    <div className="search">
      <Formik
        initialValues={{ search: "" }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
      >
        {({ values }) => (
          <Form>
            <Field type="text" name="search" placeholder={placeholder} />
            <ErrorMessage name="search" component="div" className="search-error" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Search;
