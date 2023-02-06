import React from 'react'

export default function Schedule() {
  return (
   <>
      <div
        style={{
          background: "black",
          height: "231px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "1300px", textAlign: "center" }}>
          <h1 style={{ fontSize: "180px", fontWeight:"400", color: "white",fontFamily:"Teko",position:"relative",left:"-149px" ,top:"52px"}}> TODAY'S MATCH</h1>
          <p style={{color:"white",fontSize:"40px",fontFamily:"Teko",position:"relative",left:"113px",top:"-4px"}}> GRAND FINAL M1/12</p>
        </div>
        <div style={{ position: "absolute", right: "40px" }}>
          <img
            src="https://media.discordapp.net/attachments/1043905461193285702/1066734848343031828/400.png"
            height="210px"
            alt=""
          />
        </div>
      </div >
      <div style={{margin:"151px 72px",display:"flex"}}>
        {/* MATCH-1 */}
        <div style={{height:"563px",width:"380px",margin:"0px 28px"}}> 
          <div style={{height:"87px",background:"black",textAlign:"center",fontSize:"50px",fontWeight:"500",color:"white",fontFamily:"Teko"}}>
            <p style={{paddingTop:"10px"}}>MATCH 1</p>
          </div>
          <div style={{height:"416px"}}>
            <img height="416px" src="https://media.discordapp.net/attachments/1067392894236905472/1067396758101033070/ERANGEL.png" alt="" />
            <p style={{position:"relative",bottom:"45px",left:"136px",color:"white",fontFamily:"Teko",fontSize:"45px"}}>ERANGEL</p>
          </div>
          <div style={{background:"#c1c1c1",height:"61px",textAlign:"center",fontSize:"50px",fontWeight:"600",color:"black",fontFamily:"Teko"}}>
            <p>WWCD</p>
          </div>
        </div>
        {/* MATCH-2 */}
        <div style={{height:"563px",width:"380px",margin:"0px 28px"}}> 
          <div style={{height:"87px",background:"black",textAlign:"center",fontSize:"50px",fontWeight:"500",color:"white",fontFamily:"Teko"}}>
            <p style={{paddingTop:"10px"}}>MATCH 2</p>
          </div>
          <div style={{height:"416px"}}>
            <img height="416px" src="https://media.discordapp.net/attachments/1067392894236905472/1067396757815828601/MIRAMAR.png" alt="" />
            <p style={{position:"relative",bottom:"45px",left:"136px",color:"white",fontFamily:"Teko",fontSize:"45px"}}>MIRAMAR</p>
          </div>
          <div style={{background:"#c1c1c1",height:"61px",textAlign:"center",fontSize:"50px",fontWeight:"600",color:"black",fontFamily:"Teko"}}>
            <p>WWCD</p>
          </div>
        </div>
        {/* MATCH-3 */}
        <div style={{height:"563px",width:"380px",margin:"0px 28px"}}> 
          <div style={{height:"87px",background:"black",textAlign:"center",fontSize:"50px",fontWeight:"500",color:"white",fontFamily:"Teko"}}>
            <p style={{paddingTop:"10px"}}>MATCH 3</p>
          </div>
          <div style={{height:"416px"}}>
            <img height="416px" src="https://media.discordapp.net/attachments/1067392894236905472/1067396757589332008/SANHOK.png" alt="" />
            <p style={{position:"relative",bottom:"45px",left:"136px",color:"white",fontFamily:"Teko",fontSize:"45px"}}>SHANOK</p>
          </div>
          <div style={{background:"#c1c1c1",height:"61px",textAlign:"center",fontSize:"50px",fontWeight:"600",color:"black",fontFamily:"Teko"}}>
            <p>WWCD</p>
          </div>
        </div>
        {/* MATCH-4 */}
        <div style={{height:"563px",width:"380px",margin:"0px 28px"}}> 
          <div style={{height:"87px",background:"black",textAlign:"center",fontSize:"50px",fontWeight:"500",color:"white",fontFamily:"Teko"}}>
            <p style={{paddingTop:"10px"}}>MATCH 4</p>
          </div>
          <div style={{height:"416px"}}>
            <img height="416px" src="https://media.discordapp.net/attachments/1067392894236905472/1067396758101033070/ERANGEL.png" alt="" />
            <p style={{position:"relative",bottom:"45px",left:"136px",color:"white",fontFamily:"Teko",fontSize:"45px"}}>ERANGEL</p>
          </div>
          <div style={{background:"#c1c1c1",height:"61px",textAlign:"center",fontSize:"50px",fontWeight:"600",color:"black",fontFamily:"Teko"}}>
            <p>WWCD</p>
          </div>
        </div>
      </div>
   </>
  )
}
