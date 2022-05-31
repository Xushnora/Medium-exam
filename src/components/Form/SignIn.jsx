import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='forum'>
        <div className='forum__inner'>
            <div className='forum__img-box2'>
                <img src={'https://imgur.com/n02zeh5.png'} className="forum__img"/>
            </div>
            <div className='forum__info'>
                <h2 className='forum__title'>Sign In</h2>
                <p className='forum__link-text'>Do not you have an account? 
                <Link  className='forum__link' to={'/'}>Sign up</Link>
                </p>
                <form className='forum__form'>
                      <input className='forum__input' type="email" placeholder='Email' required/>
                      <input className='forum__input' type="password" placeholder='Password' required/>
                      <button className='forum__btn'>Next step</button>
                </form>
            </div>
      </div>
      
    </div>
  )
}

export default SignIn;