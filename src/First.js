import React from 'react'
import './First.css'

const First = () => {
    return (
        <div className='navbar'>

            <div className='menu'>
                <div className='logo'>
                    <h2>Netflix</h2>
                </div>
                <div className='button'>


                    <select style={{ marginRight: '5px' }} >
                        <option value="eng">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <button type="button" class="btn btn-danger">Sign in</button>

                    <div>
                    </div>

                </div>

            </div>
            <div className='home'>
            <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
            <h4>Join today. Cancel anytime.</h4>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='email'>
                <form>
                    <input type='email' placeholder='Email address '></input>
                    <button>Get Started </button>
                </form>
            </div>
        </div>

        </div>



    )
}

export default First
