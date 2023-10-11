import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <div class='contain'>
        <div class='wrapper'>
          <div class='form'>
            <h4>GET IN TOUCH</h4>
            <h2 class='form-headline'>Send us a message</h2>
            <form id='submit-form' action=''>
              <p>
                <input
                  id='name'
                  class='form-input'
                  type='text'
                  placeholder='Your Name*'
                />
                <small class='name-error'></small>
              </p>
              <p>
                <input
                  id='email'
                  class='form-input'
                  type='email'
                  placeholder='Your Email*'
                />
                <small class='name-error'></small>
              </p>
              <p class='full-width'>
                <textarea
                  minlength='20'
                  id='message'
                  cols='30'
                  rows='7'
                  placeholder='Your Message*'
                  required></textarea>
                <small></small>
              </p>
              <p class='full-width'>
                <input
                  type='submit'
                  class='submit-btn'
                  value='Submit'
                  onclick='checkValidations()'
                />
                <button class='reset-btn' onclick='reset()'>
                  Reset
                </button>
              </p>
            </form>
          </div>

          <div class='contacts contact-wrapper'>
            <ul>
              <li class='right-text'>
                If you have any problems or suggestions, please contact us!
              </li>
              <span class='hightlight-contact-info'>
                <li class='email-info'>
                  <i class='fa fa-envelope' aria-hidden='true'></i>{" "}
                  bongiono@pizzeria.com
                </li>
                <li>
                  <i class='fa fa-phone' aria-hidden='true'></i>{" "}
                  <span class='highlight-text'>+0777777777</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
