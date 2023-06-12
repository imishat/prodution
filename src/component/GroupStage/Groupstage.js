import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GroupstageContext from '../../context/GroupstageContext/GroupstageContext';
import GroupstageButton from './GroupstageButton';
import { GroupstageItem } from './GroupstageItem';
export default function Groupstage(props) {
  const tid = useParams()
  const t_id = tid.id
  const context = useContext(GroupstageContext)
    const{Groups,getGroup} = context
    console.log(t_id);
    useEffect(() => {
      getGroup(t_id)
    }, [t_id])
    let divstyle = {
        padding: '10px',
        position: "absolute",
        right: "10px",
      }
      
  return (
    <>
    <GroupstageButton t_id ={t_id} />
    <div className='' style={{margin:"60px 30px", color:"white",  backgroundColor:"#061a24",height:"100vh",borderRadius:"10px",padding:"20px 20px"}}>
    <h2 style={{textDecoration:"underline",marginBottom:"20px"}}>Group Stage List</h2>
    
    {Groups.length===0? "NO GROUPS":
    Groups.map((tn)=>{
      return <GroupstageItem key={tn._id}  Groups={tn}/>
    })
}
    
    </div>
    </>
  )
}
