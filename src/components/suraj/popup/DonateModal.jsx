import React, { useRef, useState } from "react";

const DonateModal = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const amountRef = useRef();

  const getEnteredAmount = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      amount: amountRef.current.value,
    };
    props.enteredDonationAmount(formData);
  };

  const [amount, setAmount] = useState(0);
  return (
    <div>
      <form onSubmit={getEnteredAmount}>
        <div>
          <input
            type="text"
            placeholder="enter name"
            name="name"
            ref={nameRef}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="enter email"
            name="email"
            ref={emailRef}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="phone number"
            name="phone"
            ref={phoneRef}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="enter amount Rs(10 to 1000)"
            name="amount"
            ref={amountRef}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default DonateModal;
