import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import AddteamContext from "../../context/AddteamContext/AddteamContext";

export default function AddteamForm() {
  const context = useContext(AddteamContext);
  const { addTeam } = context;
  // const [addteams, setaddteams] = useState("")

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // loading on create team
  const [teamCreating, setTeamCreating] = useState(false);

  // create team
  const handleCreateTeam = (data) => {
    setTeamCreating(true);
    const teamData = {
      teamName: data.teamName,
      teamTag: data.teamTag,
      id: uuidv4(),
      teamLogo:data.teamLogo,
      player_1:data.player_1,
      player_1photo:data.player_1photo,
      player_2:data.player_2,
      player_2photo:data.player_2photo,
      player_3:data.player_3,
      player_3photo:data.player_3photo,
      player_4:data.player_4,
      player_4photo:data.player_4photo,
      player_5:data.player_5,
      player_5photo:data.player_5photo,
    };
    axios
      .post(`http://localhost:5000/api/teams/createTeams`, teamData)
      .then((res) => {
        if (res.data) {
          toast.success("Team Successfully Added");
          reset();
          setTeamCreating(false);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleCreateTeam)}>
        <div class="form-group ">
          <label for="exampleInputPassword1">Team Name</label>
          <input
            {...register("teamName", { required: true })}
            type="text"
            class="form-control"
            id="teamName"
            placeholder="Team Name"
          />
        </div>
        <div class="form-group ">
          <label for="exampleInputPassword1">Team tag</label>
          <input
            type="text"
            class="form-control"
            id="teamTag"
            {...register("teamTag", { required: true })}
            placeholder="Team Tag"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2"> Team Logo Url</label>
          <input
            type="text"
            class="form-control"
            id="teamLogo"
            {...register("teamLogo", { required: true })}
            placeholder="Team Logo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 1</label>
          <input
            type="text"
            class="form-control"
            id="player_1"
            {...register("player_1", { required: true })}
            placeholder="Player 1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 1 Photo</label>
          <input
            type="text"
            class="form-control"
            id="player_1photo"
            {...register("player_1photo", { required: true })}
            placeholder="Player_1 Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 2</label>
          <input
            type="text"
            class="form-control"
            id="player_2"
            {...register("player_2", { required: true })}
            placeholder="Player 2"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 2 Photo</label>
          <input
            type="text"
            class="form-control"
            id="player_2photo"
            {...register("player_2photo", { required: true })}
            placeholder="Player_2 Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 3</label>
          <input
            type="text"
            class="form-control"
            id="player_3"
            {...register("player_3", { required: true })}
            placeholder="Player 3"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 3 Photo</label>
          <input
            type="text"
            class="form-control"
            id="player_3photo"
            {...register("player_3photo", { required: true })}
            placeholder="Player 3  Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 4</label>
          <input
            type="text"
            class="form-control"
            id="player_4"
            {...register("player_4", { required: true })}
            placeholder="Player 4"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 4 Photo</label>
          <input
            type="text"
            class="form-control"
            id="player_4photo"
            {...register("player_4photo", { required: true })}
            placeholder="Player 4 Photo Url"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 5</label>
          <input
            type="text"
            class="form-control"
            id="player_5"
            {...register("player_5", { required: true })}
            placeholder="Player 5"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Player 5 Photo</label>
          <input
            type="text"
            class="form-control"
            id="player_5photo"
            {...register("player_5photo", { required: true })}
            placeholder="Player 5 Photo Url"
          />
        </div>

        <button type="submit" class="btn btn-primary mt-2">
          {teamCreating ? "Creating..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
