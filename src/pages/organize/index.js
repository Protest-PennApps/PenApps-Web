import React, { useState } from "react";
import { Formik, useField, Form } from "formik";
import Header from "../../components/Header";
import "../../pages/organize/styles.css";

import * as Yup from "yup";

const CustomInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field: ", field);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={`custom-input ${className}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label className="checkbox">
        <input className="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div className="error"></div> : null}
    </>
  );
};

export default function Organize() {
  const [eventData, setEventData] = useState({});
  const [comments, setComments] = useState([1, 1, 1]);
  const [photos, setPhotos] = useState([]);

  const { event_name, event_description } = eventData;
  return (
    <div>
      <Header />
      <div className="container" id="organizePage">
        <div id="titleSection">
          <h1 id="title">Organize an Event</h1>
        </div>

        <div className="aboutInfo">
          <h4 id="formDescription">
            If you know a protest is about to happen near you, or if you want to
            organize a protest for yourself, fill out this form to alert other
            PROTESTERS near you.
          </h4>
        </div>
        <Formik
          initialValues={{
            name: "",
            description: "",
            date: "",
            time: "",
            address: "",
            city: "",
            zip: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(10, "Must be at least 3 characters")
              .max(75, "Must be 15 characters or less")
              .required("Required"),
            description: Yup.string()
              .min(20, "Must be at least 20 characters")
              .max(150, "Must be 150 characters or less")
              .required("Required"),
            date: Yup.string()
              .min(6, "Must be at least 3 characters")
              .max(6, "Must be 15 characters or less")
              .required("Required"),
            time: Yup.string().required("Required"),
            address: Yup.string()
              .min(5, "Must be at least 3 characters")
              .max(50, "Must be 15 characters or less")
              .required("Required"),
            city: Yup.string()
              .min(3, "Must be at least 3 characters")
              .max(17, "Must be 17 characters or less")
              .required("Required"),
            zip: Yup.string()
              .min(5, "Must be at least 5 characters")
              .max(5, "Must be 5 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Submitting form");
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm();
              setSubmitting(false);
            }, 3000);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <h3>Event Name</h3>
              <CustomInput
                name="name"
                type="text"
                placeholder="A fitting name for a ..."
              />

              <h3>Purpose/Description</h3>
              <CustomInput
                name="description"
                className="event-purpose"
                type="text"
                placeholder="The purpose of this gathering is to ..."
              />
              <div className="date-time">
                <div>
                  <h3>Date</h3>
                  <CustomInput name="date" type="text" placeholder="00/00/00" />
                </div>

                <div>
                  <h3>Time</h3>
                  <CustomInput name="time" type="time" />
                </div>
              </div>

              <h3>Address</h3>
              <CustomInput
                name="address"
                type="text"
                placeholder="1111 N Address St. "
              />

              <div className="city-zip">
                <div>
                  <h3>City</h3>
                  <CustomInput
                    name="city"
                    className="event-city"
                    type="text"
                    placeholder="Pennsylvania"
                  />
                </div>

                <div>
                  <h3>Zip Code</h3>
                  <CustomInput
                    name="zip"
                    className="event-zip"
                    type="text"
                    placeholder="88812"
                  />
                </div>
              </div>
              <div className="button">
                <button id="postBtn" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* footer */}
      </div>
    </div>
  );
}
