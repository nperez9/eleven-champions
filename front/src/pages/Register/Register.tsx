import { FormEvent, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import { IAppState, IAuthState } from '../../store';
import { loginAction } from '../../store/action-creators/auth-actions';

interface RegisterProps {
  message?: string;
}

export const Register: React.FC<RegisterProps> = ({ message = '' }) => {
  const { isLogged } = useSelector<IAppState, IAuthState>(
    (state) => state.auth
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isLogged) {
    navigate('/panel', { replace: true });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //@ts-ignore
    dispatch(loginAction(email, password));
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.Login}>
      <h1>Eleven Champions</h1>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name='email'
          type='email'
          placeholder='Enter email'
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          type='password'
          placeholder='Password'
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group>
      <Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
        <Button variant='primary' type='submit' className={styles.SingIn}>
          Sign in
        </Button>
      </Form.Group>
      {message && <Alert variant='warning'>{message}</Alert>}
    </Form>
  );
};
