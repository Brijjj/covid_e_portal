import React from "react";
import { useFormik } from "formik";
import { Validate } from "../schemas/validate";

const initialValues = {
  name: "",
  email: "",
  mobilenumber: "",
  dob: "",
  address: "",
  country: "",
  state: "",
  gender:"",
  maritalstatus:"",
  pincode: "",
  date: "",
  time: "",
  detaile: "",
};

// const onSubmit = (values, resetForm) => {
//   console.log("hhh");
//   console.log(values);
//   alert("submitted");
//   resetForm();
// };
const Form = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Validate,
    onSubmit :(values, resetForm) => {
      console.log("hhh");
      console.log(values);
      alert("submitted");
      resetForm();
    }
  });

  // console.log(errors);
  // console.log(values);

  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h4 className="mb-5 text-uppercase">
                        Covid E-Portal Registration Form
                      </h4>
                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control form-control-lg"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          {errors.name && touched.name ? (
                            <div style={{ color: "red" }}>{errors.name}</div>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="email">
                            Email ID
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control form-control-lg"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          {errors.email && touched.email ? (
                            <div style={{ color: "red" }}>{errors.email}</div>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="mobilenumber">
                            Mobile Number
                          </label>
                          <input
                            type="text"
                            name="mobilenumber"
                            id="mobilenumber"
                            className="form-control form-control-lg"
                            value={values.mobilenumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          {errors.mobilenumber && touched.mobilenumber ? (
                            <div style={{ color: "red" }}>
                              {errors.mobilenumber}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="dob">
                            Date Of Birth
                          </label>
                          <input
                            type="date"
                            name="dob"
                            id="dob"
                            className="form-control form-control-lg"
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          {errors.dob && touched.dob ? (
                            <div style={{ color: "red" }}>{errors.dob}</div>
                          ) : null}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="address">
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control form-control-lg"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          {errors.address && touched.address ? (
                            <div style={{ color: "red" }}>{errors.address}</div>
                          ) : null}
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>
                          <div className="form-check form-check-inline mb-0 me-4"
                           value={values.gender}
                           onChange={handleChange}
                           onBlur={handleBlur}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              defaultValue="option1"
                             
                              
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              defaultValue="option2"
                            
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="other"
                              defaultValue="option3"
                              
                            />
                            <label className="form-check-label" htmlFor="other">
                              Other
                            </label>
                          </div>
                        </div>
                        {errors.gender && touched.gender ? (
                          <div style={{ color: "red" }}>{errors.gender}</div>
                        ) : null}
                        <br></br>
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Marital Status: </h6>
                          <div className="form-check form-check-inline mb-0 me-4"
                           value={values.maritalstatus}
                           onChange={handleChange}
                           onBlur={handleBlur}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="maritalstatus"
                              id="married"
                              defaultValue="option1"
                              
                            />
                            <label
                              className="form-check-label"
                              htmlFor="married"
                            >
                              Married
                            </label>
                          </div>
                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="maritalstatus"
                              id="unmarried"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="unmarried"
                            >
                              Unmarried
                            </label>
                          </div>
                          <span></span>
                        </div>
                        {errors.maritalstatus && touched.maritalstatus ? (
                          <div style={{ color: "red" }}>
                            {errors.maritalstatus}
                          </div>
                        ) : null}
                        <br></br>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="country">
                                Country
                              </label>
                              <input
                                type="text"
                                name="country"
                                id="country"
                                className="form-control form-control-lg"
                                value={values.country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />

                              {errors.country && touched.country ? (
                                <div style={{ color: "red" }}>
                                  {errors.country}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="state">
                                State
                              </label>
                              <input
                                type="text"
                                id="state"
                                name="state"
                                className="form-control form-control-lg"
                                value={values.state}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />

                              {errors.state && touched.state ? (
                                <div style={{ color: "red" }}>
                                  {errors.state}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="pincode">
                            Pincode
                          </label>
                          <input
                            type="number"
                            id="pincode"
                            name="pincode"
                            className="form-control form-control-lg"
                            value={values.pincode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          {errors.pincode && touched.pincode ? (
                            <div style={{ color: "red" }}>{errors.pincode}</div>
                          ) : null}
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="date">
                                Select Date
                              </label>
                              <input
                                type="date"
                                name="date"
                                id="date"
                                className="form-control form-control-lg"
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />

                              {errors.date && touched.date ? (
                                <div style={{ color: "red" }}>
                                  {errors.date}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="time">
                                Select Time
                              </label>
                              <input
                                type="time"
                                name="time"
                                id="time"
                                className="form-control form-control-lg"
                                value={values.time}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />

                              {errors.time && touched.time ? (
                                <div style={{ color: "red" }}>
                                  {errors.time}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="detaile">
                            Vaccine Center Details
                          </label>
                          <input
                            type="text"
                            name="detaile"
                            id="detaile"
                            className="form-control form-control-lg"
                            value={values.detaile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />

                          {errors.detaile && touched.detaile ? (
                            <div style={{ color: "red" }}>{errors.detaile}</div>
                          ) : null}
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="reset"
                            className="btn btn-light btn-lg"
                            onClick={(e) => resetForm()}
                          >
                            Reset all
                          </button>
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-4"
                          >
                            Submit form
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
