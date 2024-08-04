import React from 'react'
import Profile from "../../public/images/seid.jpg"
function Aside() {
  return (
    <aside>
        <div>
            <figure>
                <img src={Profile} alt="" srcset="" width="80px" />
            </figure>
        </div>
    </aside>
  )
}

export default Aside