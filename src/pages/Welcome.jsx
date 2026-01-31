import { useNavigate } from 'react-router-dom'


export default function Welcome() {
const navigate = useNavigate()


return (
<div className='screen'>
<div className='content'>
<h1>Welcome to PopX</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
</div>


<div className='actions'>
<button className='btn primary' onClick={() => navigate('/register')}>
Create Account
</button>
<button
  className='btn secondary'
  onClick={() => navigate('/login')}
>
  Already Registered? Login
</button>

</div>
</div>
)
}