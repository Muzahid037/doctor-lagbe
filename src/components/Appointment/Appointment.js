import React from 'react';
import { useForm } from "react-hook-form";
import './Appointment.css';
import AppointmentImg from './../../images/appoinment.jpg'
import useAuth from '../../hooks/useAuth';

const Appointment = () => {
    const { user } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    //console.log(watch("name")); // watch input value by passing the name of it

    return (
        <div>
            <h2>Make an Appointment</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
                <div className="col">
                    <img className="img-fluid" src={AppointmentImg} alt="" />
                </div>

                <div className="col d-flex justify-content-center align-items-center">
                    <form className="appoinment-form" onSubmit={handleSubmit(onSubmit)}>

                        <input className="my-4" defaultValue={user.displayName} {...register("name")} />
                        <input className="my-4" placeholder="Enter Mobile" {...register("mobile", { required: true })} />
                        {errors.mobile && <span className="error">This field is required</span>}

                        <input className="my-4" placeholder="Enter Date" {...register("date", { required: true })} />
                        {errors.date && <span className="error">This field is required</span>}
                        <input className="appoinment-submit my-4" type="submit" value="Submit" />

                    </form>
                </div>

            </div>

        </div>
    );
};

export default Appointment;