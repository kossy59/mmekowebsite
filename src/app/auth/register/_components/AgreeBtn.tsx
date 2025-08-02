import React from 'react'

export default function Agree({agree, toThe, setAgree}: {agree: boolean, toThe: React.ReactNode, setAgree: ()=>void}) {
  return <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={setAgree}
                />
                <span className="checkmark"></span>
                <span>
                  I read and agree to{" "}
                  {toThe}
                </span>
              </label>
}
