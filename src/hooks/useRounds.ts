import { Rounds } from "./../types/rounds";
import axios from "axios";
import { useQuery } from "react-query";

const useGetRounds = () => {
  return useQuery(
    ["rounds"],
    async () => {
      const result = await axios.get<Rounds>(
        `${process.env.NEXT_PUBLIC_BASE_URL}users/get-round`
      );

      console.log(result);

      return result.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export { useGetRounds };
