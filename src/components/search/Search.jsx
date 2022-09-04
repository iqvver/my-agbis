import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Search = ({ placeholder }) => {
  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        validate={(values) => {
          const errors = {};
          if (values.search.length > 10) {
            errors.search = "Слишком длинный запрос";
          }
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
    </>
  );
};

export default Search;
