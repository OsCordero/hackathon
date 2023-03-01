import { useGetRounds } from "@/hooks/useRounds";
import { Game } from "@/types/rounds";
import React from "react";

const Teams = () => {
  const { data } = useGetRounds();
  const games = data?.games;
  return (
    <>
      <h1 className="mb-5 text-5xl font-bold">{`Today's matches`}</h1>
      <p className="mb-5">
        Here you can find today&apos;s games. Submit your prediction of the
        combined total points scored across all games to enter the contest.
      </p>

      {games?.map((game: Game) => {
        return (
          <div key={game.id}>
            <div className="flex w-full lg:flex-row  mb-5">
              <div className="grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold">
                {game.away.name}
              </div>
              <div className="divider lg:divider-horizontal">VS</div>
              <div className="grid w-20 flex-grow h-16 card bg-base-300 rounded-box place-items-center text-zinc-900 font-bold">
                {game.home.name}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Teams;
