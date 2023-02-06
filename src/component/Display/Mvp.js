import { color } from '@mui/system'
import React from 'react'

export default function Mvp() {
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
      <div style={{display:"flex",padding:"50px 200px"}}>
        {/* //STAT */}
        <div style={{height:"743px",width:"860px",paddingTop:"42px"}}>

            <div style={{width:"689px",height:"79px",background:"white",position:"relative",right:"-171px",margin:"27px 0px", fontSize:"62px", fontWeight:"600", color:'black',fontFamily:"Teko",display:"flex",paddingLeft:"20px"}}>
                <p>MATCH KILL</p>
               <p style={{marginLeft:"370px"}}>5</p>
               
            </div>
            <div style={{width:"714px",height:"79px",background:"#c8cdcc",position:"relative",left:"146px",margin:"27px 0px",fontSize:"62px", fontWeight:"600", color:'black',fontFamily:"Teko",display:"flex",paddingLeft:"20px"}}>
            <p>CONTRIBUTION</p>
               <p style={{marginLeft:"290px"}}>88.88%</p>
            </div>
            <div style={{width:"860px",height:"79px",background:"white",margin:"27px 0px",fontSize:"62px", fontWeight:"600", color:'black',fontFamily:"Teko",display:"flex",paddingLeft:"20px"}}>
            <p> TEAM MATCH RANKING</p>
               <p style={{marginLeft:"340px"}}>#5</p>
            </div>
            <div style={{width:"714px",height:"79px",background:"#c8cdcc",position:"relative",left:"146px",margin:"27px 0px",fontSize:"62px", fontWeight:"600", color:'black',fontFamily:"Teko",display:"flex",paddingLeft:"20px"}}>
            <p>OVERALL KILL</p>
               <p style={{marginLeft:"358px"}}>15</p>
            </div>
            <div style={{width:"770px",height:"79px",background:"white",position:"relative",left:"90px",margin:"27px 0px",fontSize:"62px", fontWeight:"600", color:'black',fontFamily:"Teko",display:"flex",paddingLeft:"20px"}}>
            <p> KILL PER MATCH</p>
               <p style={{marginLeft:"342px"}}>10.47</p>
            </div>
            <div style={{width:"787px",height:"79px",background:"#c8cdcc",position:"relative",left:"73px",margin:"27px 0px",fontSize:"62px", fontWeight:"600", color:'black',fontFamily:"Teko",display:"flex",paddingLeft:"20px"}}>
            <p> OVERALL RANKING</p>
               <p style={{marginLeft:"343px"}}>#1</p>
            </div>
        </div>
        {/* PLAYER PHOTO */}
      <div className='styleboxmvp'>
            <div style={{background:"#004e37",height:"648px",width:"668px",}}>
            <div className='shadoweffect'>

           <img  height="648px"  src="https://media.discordapp.net/attachments/1043905461193285702/1067434372455747604/12.png?width=604&height=604" alt="" srcset="" />
            </div>
            </div>
            <div style={{height:"94px",background:"black",color:"white",textAlign:"center",paddingTop:"12px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img height='100px' src="https://media.discordapp.net/attachments/894821411548446800/1041889351392563220/tie2_png.png?width=604&height=604 " alt="" />
            <h2 style={{padding:"0px 10px",fontFamily:"Teko",fontSize:"62px",fontWeight:"600px"}} >  TIE RECALL</h2>
            </div>

        </div>
        {/* ROTATE MVP */}
        <div style={{height:"743px",width:"6px"}}>
            <h2 className='mvp' style={{position:"relative", top:"303px",right:"343px",fontFamily:"Teko",fontWeight:"700",fontSize:"112px",width:"743px",color:"white"}}>MOST VALUEABLE PLAYER</h2>
        </div>
      </div>
      
   </>
  )
}
