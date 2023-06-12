import React, { useContext, useEffect, useState } from "react";
import AddteamContext from "../../context/AddteamContext/AddteamContext";
import TallyContext from "../../context/TallyContext/TallyContext";
import TeamList from "./TeamList";
export default function SelectTeam(props) {
  const context = useContext(AddteamContext);
  const context2 = useContext(TallyContext);
  const { Addteam, getTeams } = context;
  const { SelectTeams, SelectedTeam } = context2;
  useEffect(() => {
    getTeams();
  }, []);
  const [Teams, setTeams] = useState("");

  const onChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setTeams([...Teams, value]);
    } else setTeams(Teams.filter((e) => e !== value));
  };
  const onClick = async () => {
    if(Teams)
    {

      await  SelectTeams(Teams, props.m_id);
      
      
    }
    
  };

  useEffect(() => {
        
  }, [SelectedTeam])
  
  return (
    <div style={{ marginLeft: "80px", marginTop: "20px" }}>
      {Addteam.length === 0
        ? "NO TEAMS"
        : Addteam.map((tn) => {
            return <TeamList key={tn._id} Addteam={tn} onChange={onChange} />;
          })}
      <button onClick={onClick} type="submit" class="btn btn-primary mt-2">
        Submit
      </button>
    </div>
  );
}
