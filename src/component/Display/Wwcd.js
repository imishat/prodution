import { height } from "@mui/system";
import React from "react";
import { useContext ,useEffect ,useState } from "react";
import TallyContext from '../../context/TallyContext/TallyContext';

export default function Wwcd(props) {
  const contexts = useContext(TallyContext)
  const [teams, setteams] = useState([])

  const {FilteredTeam ,getfilter } = contexts
  useEffect(() => {
    const me = getfilter(props.m_id)
    setteams(me)
  }, [])
  
  useEffect(() => {

}, [teams])

  return (
    <>
      <div
        style={{
          //  background:"black",
          height: "231px",
          display: "flex",
          flexDirection:"column",
          // alignItems: "center",
        }}
      >
       <h2 style={{ position: "relative", left: "0px", color: "white", fontSize: "290px", fontFamily: "teko", marginTop: "-5px", marginLeft: "-25px", WebkitTextStrokeWidth: "1px", top:"-67px",
  WebkitTextStrokeColor: "white",
  color: "transparent",opacity:"67%"}}>
        CHICKEN TEAM FOCUS
      </h2>
        <img
          style={{ position: "relative", left: "70px",top:"-385px" }}
          width="300px"
          src="https://media.discordapp.net/attachments/1067392894236905472/1086146168792305675/logo400.png"
          alt=""
        />
       <div style={{width:"1000px",position:"relative",left:"445px",top:"-595px",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",fontFamily:'teko',fontWeight:"700px",justifyContent:"space-between",width:"978px"}} >
        <h2 style={{fontSize:"40px"}}>PUBG MOBILE BATTLE OF THOUGHT SEASON 1</h2>
        <div style={{backgroundColor:"#187d5d",borderRadius:"4px",padding:"0px 10px"}}>

        <h2 style={{fontSize:"40px"}}>QUALIFY ROUND M1/16</h2>
        </div>

        </div>
        <h2 style={{fontFamily:"teko",fontWeight:"700",fontSize:"176px",marginTop:"-42px"}}>CHICKEN TEAM FOCUS</h2>
       </div>
      </div>
      {/* above is header for dispaloy page  */}

      <div style={{display:"flex",marginTop:"59px",marginLeft:"115px",justifyContent:"space-between",width:"1710px"}}>

     

       <div style={{width:"408px" ,position:"relative"}}>

              <img style={{position:"absolute",zIndex:"1"}} height="384px" width="408px" src="https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=604&height=604" alt="" />
          <div style={{height:"384px",width:"408px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",backgroundColor:"rgba(0, 0, 0, 0.46)"}} >

            
            </div>


  
            <div style={{height:"67px",fontfamily:"teko",fontWeight:"600",display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:"#187d5d",clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
              <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}>PLAYER NAME 1</h2>
              </div>  
              <div style={{display:"flex",fontFamily:"teko",justifyContent:"space-evenly" , alignItems:"center",height:"93px",marginTop:"8px",clipPath:"polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",   backgroundColor:"black"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "156px" ,textAlign:"center" ,borderRadius:"5px"}}>ELIMINATION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                <div style={{borderLeft:"2px solid black",height:"70px"}}>

                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "171px" ,textAlign:"center" ,borderRadius:"5px"}}>CONTRIBUTION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                </div>      
        </div>  
       <div style={{width:"408px" ,position:"relative"}}>

              <img style={{position:"absolute",zIndex:"1"}} height="384px" width="408px" src="https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=604&height=604" alt="" />
          <div style={{height:"384px",width:"408px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",backgroundColor:"rgba(0, 0, 0, 0.46)"}} >

            
            </div>


  
            <div style={{height:"67px",fontfamily:"teko",fontWeight:"600",display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:"#187d5d",clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
              <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}>PLAYER NAME 1</h2>
              </div>  
              <div style={{display:"flex",fontFamily:"teko",justifyContent:"space-evenly" , alignItems:"center",height:"93px",marginTop:"8px",clipPath:"polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",   backgroundColor:"white"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "156px" ,textAlign:"center" ,borderRadius:"5px"}}>ELIMINATION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                <div style={{borderLeft:"2px solid black",height:"70px"}}>

                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "171px" ,textAlign:"center" ,borderRadius:"5px"}}>CONTRIBUTION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                </div>      
        </div>  
       <div style={{width:"408px" ,position:"relative"}}>

              <img style={{position:"absolute",zIndex:"1"}} height="384px" width="408px" src="https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=604&height=604" alt="" />
          <div style={{height:"384px",width:"408px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",backgroundColor:"rgba(0, 0, 0, 0.46)"}} >

            
            </div>


  
            <div style={{height:"67px",fontfamily:"teko",fontWeight:"600",display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:"#187d5d",clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
              <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}>PLAYER NAME 1</h2>
              </div>  
              <div style={{display:"flex",fontFamily:"teko",justifyContent:"space-evenly" , alignItems:"center",height:"93px",marginTop:"8px",clipPath:"polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",   backgroundColor:"white"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "156px" ,textAlign:"center" ,borderRadius:"5px"}}>ELIMINATION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                <div style={{borderLeft:"2px solid black",height:"70px"}}>

                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "171px" ,textAlign:"center" ,borderRadius:"5px"}}>CONTRIBUTION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                </div>      
        </div>  
       <div style={{width:"408px" ,position:"relative"}}>

              <img style={{position:"absolute",zIndex:"1"}} height="384px" width="408px" src="https://media.discordapp.net/attachments/1067392894236905472/1085094239110692864/ar4.png?width=604&height=604" alt="" />
          <div style={{height:"384px",width:"408px",clipPath:"polygon(49% 5%, 74% 5%, 79% 0%, 96% 0%, 100% 4%, 100% 33%, 98% 34%, 98% 98%, 100% 100%, 0% 100%, 2% 99%, 1% 35%, 0% 33%, 0% 3%, 3% 0%, 21% 0%, 26% 5%)",backgroundColor:"rgba(0, 0, 0, 0.46)"}} >

            
            </div>


  
            <div style={{height:"67px",fontfamily:"teko",fontWeight:"600",display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:"#187d5d",clipPath:" polygon(0% 0%, 100% 0%, 100% 88.75%, 79.49% 88.86%, 76.92% 100%, 3.63% 100%, 0% 76.97%)"}}>
              <h2 style={{fontFamily:"teko",fontSize:"42px",fontWeight:"600"}}>PLAYER NAME 1</h2>
              </div>  
              <div style={{display:"flex",fontFamily:"teko",justifyContent:"space-evenly" , alignItems:"center",height:"93px",marginTop:"8px",clipPath:"polygon(16.84px 0px, 224.9px 0px, 227.9px 4.59px, 326.25px 4.59px, 330.12px 0px, 397.36px 0px, 406px 9.17px, 406px 93px, 227.9px 93px, 224.12px 87.11px, 96.74px 87.11px, 93.74px 93px, 0px 93px, 0px 15.6px)",   backgroundColor:"white"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "156px" ,textAlign:"center" ,borderRadius:"5px"}}>ELIMINATION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                <div style={{borderLeft:"2px solid black",height:"70px"}}>

                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"26px",backgroundColor:"#008930" ,height:"34px" ,width: "171px" ,textAlign:"center" ,borderRadius:"5px"}}>CONTRIBUTION</h2>
                  <p style={{ fontSize:"34px",fontWeight:"600",position:"relative",top:"15px"}}>0</p>
                </div>
                </div>      
        </div>  
        </div>
        <div style={{display:"flex",justifyContent:"space-between",height:"142px",width:"1703px",marginLeft:"114px",marginTop:"7px"}}>
          <div style={{backgroundColor:"#187d5d",width:"564px",clipPath:"polygon(0px -1px, 550px 0px, 564px 13px, 564px 57.44px, 558px 60.8px, 557px 119px, 564px 125px, 565px 142px, 413px 142px, 404.9px 135.48px, 207.82px 135.48px, 198px 142px, 25px 142px, 0px 119px)",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
              <img height="200px" width="200px" src="https://media.discordapp.net/attachments/894821411548446800/1041889351392563220/tie2_png.png?width=604&height=604" alt="" />
            </div>
            <div style={{textAlign:"center"}}>
              <h2 style={{fontFamily:'teko',fontWeight:"600", fontSize:" 65px",color:"white"}}>RED ESPORTS</h2>
            </div>
          </div>
          <div  style={{backgroundColor:"white",width:"564px",clipPath:"polygon(0px -1px, 550px 0px, 564px 13px, 564px 57.44px, 558px 60.8px, 557px 119px, 564px 125px, 565px 142px, 413px 142px, 404.9px 135.48px, 207.82px 135.48px, 198px 142px, 25px 142px, 0px 119px)",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <div style={{fontFamily:'teko',fontWeight:"600", fontSize:" 50px"}}>
              <h2 style={{fontFamily:'teko',fontWeight:"600", fontSize:" 65px"}} >MATCH ELIMINATION</h2>
            </div>
            <div>
              <h2 style={{fontFamily:'teko',fontWeight:"600", fontSize:" 65px"}}>9</h2>
            </div>
          </div>
          <div style={{backgroundColor:"white",width:"564px",clipPath:"polygon(0px -1px, 550px 0px, 564px 13px, 564px 57.44px, 558px 60.8px, 557px 119px, 564px 125px, 565px 142px, 413px 142px, 404.9px 135.48px, 207.82px 135.48px, 198px 142px, 25px 142px, 0px 119px)",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
            <h2 style={{fontFamily:'teko',fontWeight:"600", fontSize:" 65px"}}>MATCH POINT</h2>
            </div>
            <div>
              <h2 style={{fontFamily:'teko',fontWeight:"600", fontSize:" 65px"}}>24</h2>
            </div>
          </div>
        </div>
    </>
  );
}
