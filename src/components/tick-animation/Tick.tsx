import React from "react"
import "./style.css"

export default function Tick({loading, children}: {loading: boolean, children?: React.ReactNode}) {
  return (
<section>
    <div className="rt-container ">
        <div className="col-rt-12">
            <div className="Scriptcontent flex flex-col items-center">
                <div className={`circle-loader ${loading && "load-complete"}`}>
                    <div className="checkmark draw" style={{display: `${loading ?  "block" : "none"}`}}></div>
                </div>		
                <p>
                    {children}
                </p>
    		</div>
		</div>
    </div>
</section>
		

  )
}
