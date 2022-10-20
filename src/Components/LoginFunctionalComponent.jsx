import './LoginComponent.css';
function LoginFunctionalComponent(){
    return(
        <div className='form1'>
<form>
    <div className='container'>
            <div className='section1'>
                <h2>Sign up now</h2>
                <p>Get access to your orders and chat for support.</p>
            </div>
            <div className='section2'>
                <input className='section2-text' type="text" id="" placeholder='Enter Username'/>
                <input className='section2-text' type="text" id="" placeholder='Enter Password'/>
                <button className='section2-button'>Sign In</button><a href="#">Terms and Conditions</a>
            </div>
        </div>

</form>
</div>
    );
}

export default LoginFunctionalComponent;