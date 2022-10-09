import  React from"react"

export const Footer=()=>{
const year =new Date().getFullYear()
return(
    <>
    <p className="copyright-text">Ib copyright {year}</p>
    </>
)
}

