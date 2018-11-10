import React, { PureComponent } from 'react'
import Particles from 'react-particles-js'
import { Formik, Form } from 'formik'
import Input from 'antd/lib/input/Input'
import 'antd/lib/input/style/css'
import particlesConfig from './particlesConfig'
import validationSchema from './validationSchema'
import { LoadingButton } from './Blocks'
import {
  Container,
  FormWrapper,
  FormContainer,
  Header,
  Icon,
  TitleContainer,
  Title,
  IconEnvelope,
  IconKey,
  InputsContainer,
  Description,
  InputWrapper,
  ButtonWrapper
} from './styles'

export default class Login extends PureComponent {
  handleSubmitClick = values => {}

  render() {
    return (
      <Container>
        <Particles className="own-particles-wrapper" params={particlesConfig} />
        <FormWrapper>
          <Formik
            initialValues={{ email: '', password: '' }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmitClick}
          >
            {({ errors, values, handleSubmit, handleBlur, handleChange }) => (
              <Form>
                <FormContainer>
                  <Header>
                    <Icon />
                    <TitleContainer>
                      <Title>Owncloud</Title>
                    </TitleContainer>
                  </Header>
                  <Description>Get the access to your store</Description>
                  <InputsContainer>
                    <InputWrapper>
                      <Input
                        addonBefore={<IconEnvelope warning={errors.email} />}
                        name="email"
                        placeholder="email@my.com"
                        size="large"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </InputWrapper>
                    <InputWrapper>
                      <Input
                        addonBefore={<IconKey warning={errors.password} />}
                        name="password"
                        placeholder="********"
                        size="large"
                        type="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </InputWrapper>
                  </InputsContainer>
                  <ButtonWrapper>
                    <LoadingButton
                      disabled={true}
                      isLoading={false}
                      onClick={handleSubmit}
                    />
                  </ButtonWrapper>
                </FormContainer>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </Container>
    )
  }
}
