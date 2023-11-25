import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? '#f9f9f9' : '#475569'

          return (
            <>
              <InputLabel color={color} htmlFor="username">
                USERNAME
              </InputLabel>
              <UserInput
                id="username"
                type="text"
                value={username}
                onChange={this.onChangeUsername}
                name="username"
                placeholder="Username"
              />
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? '#f9f9f9' : '#475569'

          return (
            <>
              <InputLabel color={color} htmlFor="password">
                PASSWORD
              </InputLabel>
              <UserInput
                type={inputType}
                id="password"
                value={password}
                name="password"
                onChange={this.onChangePassword}
                placeholder="Password"
              />
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  id="checkbox"
                  onChange={this.onShowPassword}
                />
                <ShowPassword color={color} htmlFor="checkbox">
                  Show Password
                </ShowPassword>
              </CheckboxContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const formBgColor = isDarkTheme ? '#313131' : '#f9f9f9'

          return (
            <AppContainer bgColor={bgColor}>
              <FormContainer
                formBgColor={formBgColor}
                onSubmit={this.submitForm}
              >
                <LoginLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>{this.renderUserName()}</InputContainer>
                <InputContainer>{this.renderPassword()}</InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
              </FormContainer>
            </AppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginPage
