import React from "react"
import "./styles.css"

export default function LoginPageParent() {
  return (
    <div className="login-page-parent flex-col-hstart-vstart clip-contents">
      <div className="rectangle-7" />
      <div className="group-372 flex-col">
        <p className="txt-440">User</p>
        <div className="group-865 flex-col-hcenter">
          <div className="group-865 flex-col-hcenter">
            <div className="group-6103 flex-col">
              <div className="rectangle-5" />
              <p className="txt-237">Password</p>
            </div>
            <div className="rectangle-8" />
            <div className="rectangle-9" />
          </div>
        </div>
      </div>
      <p className="txt-828 flex-hcenter">Login</p>
      <p className="txt-037 flex-hcenter">Register</p>
    </div>
  )
}
