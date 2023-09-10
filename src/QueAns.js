import React from 'react'
import './QueAns.css'
const QueAns = () => {
  return (
    <div className='Faq'>
      <h7>Frequently Asked Questions</h7>
      <ul className='according'>
        <li>
          <input type='radio' name='according' id='fist'></input>
          <label for='fist'>what is Netflix</label>
          <div className='content'>
            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
            <br></br>
            <p> can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
          </div>
        </li>
        <li>
          <input type='radio' name='according' id='second'></input>
          <label for='second'>How much does Netflix cost?</label>
          <div className='content'>
            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>

          </div>
        </li>
        <li>
          <input type='radio' name='according' id='third'></input>
          <label for='third'>Where can i watch</label>
          <div className='content'>
            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
            <br></br>
            <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>

          </div>
        </li>
      </ul>
      <div className='home'>
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

export default QueAns
