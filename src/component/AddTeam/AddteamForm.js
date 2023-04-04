import React from "react";
import { useState, useContext, useEffect } from "react";
import AddteamContext from "../../context/AddteamContext/AddteamContext";


export default function AddteamForm() {


  const context = useContext(AddteamContext)
  const { addTeam } = context
  const [addteams, setaddteams] = useState("")
  const onChange = (e) => {
    setaddteams({ ...addteams, [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault()
    (addteams)
    addTeam(addteams.teamName, addteams.teamTag, addteams.teamLogo, addteams.player_1, addteams.player_1photo, addteams.player_2, addteams.player_2photo, addteams.player_3, addteams.player_3photo, addteams.player_4, addteams.player_4photo, addteams.player_5, addteams.player_5photo)
  }


  return (
    <div>
      <form>
        <div class="form-group ">
          <label for="exampleInputPassword1">Team Name</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="teamName"
            name="teamName"
            placeholder="Team Name"
          />
        </div>
        <div class="form-group ">
          <label for="exampleInputPassword1">Team tag</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="teamTag"
            name="teamTag"
            placeholder="Team Tag"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2"> Team Logo Url</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="teamLogo"
            name="teamLogo"
            placeholder="Team Logo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 1</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_1"
            name="player_1"
            placeholder="Player 1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 1 Photo</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_1photo"
            name="player_1photo"
            placeholder="Player_1 Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 2</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_2"
            name="player_2"
            placeholder="Player 2"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 2 Photo</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_2photo"
            name="player_2photo"
            placeholder="Player_2 Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 3</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_3"
            name="player_3"
            placeholder="Player 3"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 3 Photo</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_3photo"
            name="player_3photo"
            placeholder="Player 3  Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 4</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_4"
            name="player_4"
            placeholder="Player 4"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 4 Photo</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_4photo"
            name="player_4photo"
            placeholder="Player 4 Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 5</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_5"
            name="player_5"
            placeholder="Player 5"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 5 Photo</label>
          <input
            type="text"
            class="form-control"
            onChange={onChange}
            id="player_5photo"
            name="player_5photo"
            placeholder="Player 5 Photo Url"
          />
        </div>

        <button
          type="submit"
          onClick={handleClick}
          class="btn btn-primary mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
