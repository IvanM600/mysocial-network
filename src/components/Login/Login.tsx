import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {required, maxLengthCreator} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls"
import {login}  from "../../Redux/auth-reducer"
import { Redirect } from "react-router-dom"
import classes from "./../common/FormsControls/FormsControls.module.css"
import { AppStateType } from "../../Redux/redux-store";
import {useDispatch, useSelector} from "react-redux"

const maxLength25 = maxLengthCreator(25)

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
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
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: "login"
})(LoginForm)



type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string 
}

export const Login: React.FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: any) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"profile"} />
    }

    return <div>
             <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
             <div>
                 <div>Guest account:</div>
                 <div>Email: free@samuraijs.com</div>
                 <div>Password: free</div>
             </div>
          </div>
          
}

