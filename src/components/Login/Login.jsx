import React from "react";
import { Field, reduxForm } from "redux-form";
import {required, maxLengthCreator} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls"
import {connect} from "react-redux"
import {login}  from "../../Redux/auth-reducer"
import { Redirect } from "react-router-dom"
import classes from "./../common/FormsControls/FormsControls.module.css"

const maxLength25 = maxLengthCreator(25)

const LoginForm = (props) => {
    return  (
            <form onSubmit={props.handleSubmit}>
                 <div>
                     <Field placeholder={"email"} name={"email"} component={Input} validate={[required, maxLength25]}/>
                 </div>
                 <div>
                     <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength25]} type={"password"}/>
                 </div>
                 <div>
                     <Field component={Input} validate={[required, maxLength25]} name={"rememberMe"} type={"checkbox"}/> remember me
                 </div>
                { props.error && <div className={classes.formSummaryError}>
                        {props.error}
                 </div> }
                 <div>
                     <button>Login</button>
                 </div>
             </form>
    )
}
const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"profile"} />
    }

    return <div>
             <h1>Login</h1>
             <LoginReduxForm onSubmit={onSubmit}/>
          </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)