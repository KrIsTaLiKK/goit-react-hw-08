import HelmetComponent from '../../components/HelmetComponent/HelmetComponent';
import LoginForm from '../../components/LoginForm/LoginForm';
import Section from '../../components/Section/Section';

const LoginPage = () => {
  return (
    <Section>
      <HelmetComponent>Login</HelmetComponent>
      <LoginForm />
    </Section>
  );
};

export default LoginPage;
