import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../Schema";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      panAadhar: "",
      dob: "",
      phNo: "",
      username: "",
      password: "",
      address: "",
      pin:"",
    },
    validationSchema:registerSchema,
    onSubmit:values => {
        console.log(values);
      },
  });

  console.log(formik.errors);
  return (
    <div className="form-container">
      <h3 className="form-heading">REGISTRATION FORM</h3>
      <hr />

      {/* registration form */}
      <form className="form-inp-container" onSubmit={formik.handleSubmit}>
        {/* full name input */}
        <div className="group-inp mb">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              padding: "2px",
            }}
          >
            <label htmlFor="fname">First Name</label>
            <input
              className="inp"
              type="text"
              name="fname"
              placeholder="Enter first name"
              onChange={formik.handleChange}
              value={formik.values.fname}
              onBlur={formik.handleBlur}
            />
            { formik.errors.fname && formik.touched.fname ?(<p className="form-error">{formik.errors.fname}</p>):null}
            
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              padding: "2px",
            }}
          >
            <label htmlFor="lname">Last Name</label>
            <input
              className="inp"
              type="text"
              name="lname"
              placeholder="Enter last name"
              onChange={formik.handleChange}
              value={formik.values.lname}
              onBlur={formik.handleBlur}
            />
            { formik.errors.lname && formik.touched.lname ?(<p className="form-error">{formik.errors.lname}</p>):null}
          </div>
        </div>

        {/* email input */}
        <div className="mb">
          <label htmlFor="email">Email</label>
          <input
            className="inp"
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          { formik.errors.email && formik.touched.email ?(<p className="form-error">{formik.errors.email}</p>):null}
         
        </div>

        {/* pan or aadhar input */}
        <div className="mb">
          <label htmlFor="panAadhar">PAN / AADHAR No.</label>
          <input
            className="inp"
            type="number"
            name="panAadhar"
            placeholder="Enter pan or aadhar number"
            onChange={formik.handleChange}
            value={formik.values.panAadhar}
            onBlur={formik.handleBlur}
          />
          { formik.errors.panAadhar && formik.touched.panAadhar ?(<p className="form-error">{formik.errors.panAadhar}</p>):null}
        </div>

        {/* phone and date of birth */}
        <div className="group-inp mb">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              padding: "2px",
            }}
          >
            <label htmlFor="dob">Date Of Birth</label>
            <input
              className="inp"
              type="date"
              name="dob"
              onChange={formik.handleChange}
              value={formik.values.dob}
              onBlur={formik.handleBlur}
            />
            { formik.errors.dob && formik.touched.dob ?(<p className="form-error">{formik.errors.dob}</p>):null}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              padding: "2px",
            }}
          >
            <label htmlFor="phNo">Phone Number</label>
            <input
              className="inp"
              type="number"
              name="phNo"
              placeholder="Enter phone number"
              onChange={formik.handleChange}
              value={formik.values.phNo}
              onBlur={formik.handleBlur}
            />
            { formik.errors.phNo && formik.touched.phNo ?(<p className="form-error">{formik.errors.phNo}</p>):null}
          </div>
        </div>

        {/* username input */}
        <div className="mb">
          <label htmlFor="username">Username</label>
          <input
            className="inp"
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
          />
          { formik.errors.username && formik.touched.username ?(<p className="form-error">{formik.errors.username}</p>):null}
        </div>

        {/* password input */}
        <div className="mb">
          <label htmlFor="password">Password</label>
          <input
            className="inp"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          { formik.errors.password && formik.touched.password ?(<p className="form-error">{formik.errors.password}</p>):null}
        </div>

        {/* address input */}
        <div className="mb">
          <label htmlFor="address">Adress</label>
          <textarea
            className="inp"
            type="text"
            name="address"
            placeholder="Enter address"
            onChange={formik.handleChange}
            value={formik.values.address}
            onBlur={formik.handleBlur}
          />
           { formik.errors.address && formik.touched.address ?(<p className="form-error">{formik.errors.address}</p>):null}
          
        </div>

        {/* pin input */}
        <div className="mb">
          <label htmlFor="pin">Pin</label>
          <input
            className="inp"
            type="number"
            name="pin"
            placeholder="Enter Pin Number"
            onChange={formik.handleChange}
            value={formik.values.pin}
            onBlur={formik.handleBlur}
          />
          { formik.errors.pin && formik.touched.pin ?(<p className="form-error">{formik.errors.pin}</p>):null}
          
        </div>

        {/* buuton */}
        <div>
          <button className="register-btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
