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
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <h1>Login</h1>
                 <div>
                     <Field className={classes.form_input} placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength25]}/>
                 </div>
                 <div>
                     <Field className={classes.form_input} placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength25]} type={"password"}/>
                 </div>
                 <div className={classes.form_checkbox}>
                     <Field component={Input} validate={[required, maxLength25]} name={"rememberMe"} type={"checkbox"}/>
                      remember me
                 </div>

                 {props.captchaUrl && <img src={props.captchaUrl}/>}
                 {props.captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"} validate={[required, maxLength25]} component={Input}/>}
                { props.error && <div className={classes.formSummaryError}>
                        {props.error}
                 </div> }
                 <div>
                     <button className={classes.form_button}>Sign in</button>
                 </div>
             </form>
    )
}
const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"profile"} />
    }

    return <div>
             <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
          </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)