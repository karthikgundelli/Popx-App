import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className='screen'>
      <h1>Login to your<br />PopX account</h1>

      <div className='form'>
        <label>Email address</label>
        <input placeholder='Enter email address' />

        <label>Password</label>
        <input type='password' placeholder='Enter password' />
      </div>

      <button className='btn primary full' onClick={() => navigate('/account')}>
        Login
      </button>
    </div>
  )
}
