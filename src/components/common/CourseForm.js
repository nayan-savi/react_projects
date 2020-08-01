import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ToastContainer} from "react-toastify";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '65ch',
        },
    },
}));

const CourseForm = (props) => {
    const classes = useStyles();

    return (
        <Formik initialValues={props.initialValues} validationSchema={props.validationSchema} onSubmit={props.onSubmit}>
            <Form className={classes.root}>
                <div className="form-group">
                    <label htmlFor="courseName" className="float-left">Course Name</label>
                    <Field name="courseName" component="select" className="form-control">
                        <option></option>
                        {
                            props.courseNames.map((name, index) => {
                                return (<option key={index}>{name}</option>)
                            })
                        }
                    </Field>
                    <ErrorMessage name="courseName" className="errors" component="div"/>
                </div>
                <div className="form-group">
                    <label htmlFor="startDate" className="float-left">Start Date</label>
                    <Field type="date" className="form-control" name="startDate"/>
                    <ErrorMessage name="startDate" className="errors" component="div"/>
                </div>
                <div className="form-group">
                    <label htmlFor="endDate" className="float-left">End Date</label>
                    <Field type="date" className="form-control" name="endDate"/>
                    <ErrorMessage name="endDate" className="errors" component="div"/>
                </div>
                <div className="form-group">
                    <label htmlFor="trainerName" className="float-left">Trainer Name</label>
                    <Field type="text" className="form-control" name="trainerName"/>
                    <ErrorMessage name="trainerName" className="errors" component="div"/>
                </div>
                <div className="form-group">
                    <label htmlFor="availability" className="float-left">Availability</label>
                    <Field type="text" className="form-control" name="availability"/>
                    <ErrorMessage name="availability" className="errors" component="div"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary mr-3">Submit</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>

                <ToastContainer/>
            </Form>
        </Formik>
    );
};

export default CourseForm;