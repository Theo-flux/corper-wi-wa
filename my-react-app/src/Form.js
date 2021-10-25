import React from "react"

function Form() {
  return(
    <form class="form" action="#" method="post">
      <input
        type="text"
        name="first name"
        placeholder="First Name
      "/>

      <input
        type="text"
        name="last name"
        placeholder="Last Name"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
      />


      <input
        type="text"
        name="nysc"
        placeholder="NYSC Batch/Stream/Call up"
      />

      <input
        type="text"
        name="degree"
        placeholder="Type Of Degree"
      />

      <input
        type="text"
        name="study"
        placeholder="Area Of Study"
      />

      <input
        type="text"
        name="Programming"
        placeholder="Previous Programming Knowledge"
      />


      <button type="button" name="button">Register</button>

    </form>
  )
}

export default Form
