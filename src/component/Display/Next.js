import { height } from '@mui/system'
import React from 'react'

export default function Next() {
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
          <h1 style={{ fontSize: "180px", fontWeight:"400", color: "white",fontFamily:"Teko",position:"relative",left:"-149px" ,top:"52px"}}> MATCH FRAGGER</h1>
          <p style={{color:"white",fontSize:"40px",fontFamily:"Teko",position:"relative",left:"140px",top:"-4px"}}> GRAND FINAL M1/12</p>
        </div>
        <div style={{ position: "absolute", right: "40px" }}>
          <img
            src="https://media.discordapp.net/attachments/1043905461193285702/1066734848343031828/400.png"
            height="210px"
            alt=""
          />
        </div>
      </div>
      <div style={{margin:"102px 290px",display:"flex"}}>
        <div style={{height:"678px",width:"678px",borderRadius:"14px"}}>
            
            <img style={{borderRadius:"14px",border:"10px solid #00ffea "}} height="678px" width="678px" src="https://media.discordapp.net/attachments/1067392894236905472/1067497345924743251/Pubg_erangel_map.jpg?width=604&height=604 " alt="" />
        </div>
        <div style={{height:"678px",width:"667px",marginLeft:"50px"}}>
            <div style={{height:"195px",width:"597px",background:"black",color:"white",fontSize:"102px",fontFamily:"Teko",fontWeight:"600",borderRadius:"7px",border:"7px solid #00ffea ",margin:"16px 0px",textAlign:"center"}}>
                <p style={{paddingTop:"23px"}}>GRAND-FINAL</p>
            </div>
            <div style={{height:"148px",width:"629px",background:"#c8cdcc",color:"black",fontSize:"102px",fontFamily:"Teko",fontWeight:"600",borderRadius:"7px",border:"7px solid #00ffea ",margin:"16px 0px",textAlign:'center'}}>
                <p style={{marginTop:"-4px"}}>COMING  NEXT</p>
            </div>
            <div style={{height:"107px",width:"667px",background:"white",color:"black",fontSize:"102px",fontFamily:"Teko",fontWeight:"600",borderRadius:"7px",border:"7px solid #00ffea ",margin:"16px 0px",textAlign:'center'}}>
                <p style={{marginTop:"-23px"}}>DAY 1 - MATCH 1</p>
            </div>
            <div style={{height:"161px",width:"579px",background:"#c8cdcc",color:"black",fontSize:"102px",fontFamily:"Teko",fontWeight:"600",borderRadius:"7px",border:"7px solid #00ffea ",margin:"16px 0px",textAlign:'center'}}>
                <p style={{marginTop:"-4px"}}>ERANGEL</p>
            </div>
        </div>
      </div>
 </>
  )
}
