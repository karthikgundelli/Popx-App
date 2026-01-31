import { useNavigate } from 'react-router-dom'


export default function Register() {
const navigate = useNavigate()


return (
<div className='screen'>
<h1>Create your<br />PopX account</h1>


<div className='form'>
<label>Full Name*</label>
<input placeholder='Marry Doe' />


<label>Phone number*</label>
<input placeholder='Marry Doe' />


<label>Email address*</label>
<input placeholder='Marry Doe' />


<label>Password*</label>
<input type='password' placeholder='Marry Doe' />


<label>Company name</label>
<input placeholder='Marry Doe' />


<label>Are you an Agency?*</label>
<div className='radio'>
<label><input type='radio' name='agency' defaultChecked /> Yes</label>
<label><input type='radio' name='agency' /> No</label>
</div>
</div>


<button className='btn primary full' onClick={() => navigate('/account')}>
Create Account
</button>
</div>
)
}