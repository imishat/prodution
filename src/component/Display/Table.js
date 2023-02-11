import * as React from 'react';
import AddteamContext from '../../context/AddteamContext/AddteamContext';
import TallyContext from '../../context/TallyContext/TallyContext';
import { useContext,useState,useEffect } from 'react';

export default function CustomizedTables() {
    const context = useContext(AddteamContext)
    const contexts = useContext(TallyContext)
    const {  } = context
    const {teams,totalkill,FilteredTeams  } = contexts
    const length =20
    let count = 1;
    const [totalKills, setTotalKills] = useState({});
    const [aliveCounts, setAliveCounts] = useState([]);
    useEffect(() => {
      if (FilteredTeams) {
        const totalKills = {};
        FilteredTeams.forEach(team => {
          totalKills[team.teamTag] = team.totalKills;
        });
        setTotalKills(totalKills);
      }
      console.log(FilteredTeams,"filred teams")
    }, [FilteredTeams]);
    
    
    useEffect(() => {
      if (teams) {
        const newAliveCounts = [];
        teams.forEach(team => {
          const aliveStatus = [team.player1Status, team.player2Status, team.player3Status, team.player4Status];
          const count = aliveStatus.filter(status => status === true).length;
          newAliveCounts.push({
            team: team.team,
            count: count,
          });
        });
        setAliveCounts(newAliveCounts);
      }
      // console.log(teams);
    }, [teams]);
  return (
    <table style={{border:"1px solid green"}} class="table">
  <thead  >
    <tr >
      <th  scope="col">#</th>
      <th  align='center' style={{width:"200px"}} scope="col">Team</th>
      <th  scope="col">ALIVE</th>
      <th  scope="col">PTS</th>
      <th  scope="col">ELIMS</th>
    </tr>
  </thead>
    
  <tbody style={{background:"black",color:"white"}}>
    {
        
         FilteredTeams &&FilteredTeams.map((table,index)=>{
            count = index +1
            const team = aliveCounts.find(team => team.team === table.teamName);
            const team2 = totalkill.find(team => team.team === table.teamName);
            const aliveCount = team ? team.count : 0;
            const Elms = team2? team2.kill:0;
            return(
      <tr style={{height:"10px"}} >
      <th  scope="row">{count}</th>
      <td align='center' style={{background:"white",color:"black",fontWeight:"700"}}   > <img src={table.teamLogo} alt="" width="30px" height="20 px" srcset="" /> {table.teamTag}</td>
      <td style={{fontWeight:"900",display:"flex"}} align='center' > {aliveCount === 0 && '||||'}
        {aliveCount === 1 && ( <>
      <span style={{ color: 'white' }}>|||</span>
      <span style={{ color: 'gray' }}>|</span>
    </>)  }
        {aliveCount === 2 && ( <>
      <span style={{ color: 'white' }}>||</span>
      <span style={{ color: 'gray' }}>||</span>
    </>)}
        {aliveCount === 3 && ( <>
      <span style={{ color: 'white' }}>|</span>
      <span style={{ color: 'gray' }}>|||</span>
    </>)}
        {aliveCount === 4 && <span style={{background: 'grey'}}>||||</span>}</td> 
      <td align='center' >{20}</td>
      <td align='center' >{Elms}</td>
    </tr>)
    
        })
    }
    </tbody>
</table>
  );
}
