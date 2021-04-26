import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API, DATA_ERROR, TEXT_ALIGN } from "../../shared/Constants";
import { baseApiInfo, fetchCastAndCrew } from "../../shared/API";
import { CastAndCrewData, Params } from "../../shared/Types";
import CastCard from "./CastCard";
import DataErrorText from "../Global/DataErrorText";
import LoadingAnimation from "../Global/LoadingAnimation";
import ConnectionErrorText from "../Global/ConnectionErrorText";

const Cast = () => {
  const params: Params = useParams();
  const { movieId } = params;
  const [castAndCrew, setCastAndCrew] = useState<CastAndCrewData>({
    casts: [],
    crews: [],
    apiInfo: baseApiInfo,
  });
  const countCastsShown = 5;

  useEffect(() => {
    const getCastAndCrew = `${API.BASE_URL}/movie/${movieId}/credits?api_key=${API.API_KEY}&language=en-US`;
    fetchCastAndCrew(getCastAndCrew, castAndCrew, setCastAndCrew);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      <p className="capitalize text-lg font-medium mb-6">cast</p>
      <div className="px-3">
        {castAndCrew.apiInfo.error ? (
          <ConnectionErrorText
            errorMessage={castAndCrew.apiInfo.error}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        ) : castAndCrew.casts.length !== 0 ? (
          castAndCrew.casts
            .filter((cast, idx) => idx < countCastsShown)
            .map((cast) => {
              return <CastCard key={cast.id} cast={cast} />;
            })
        ) : castAndCrew.apiInfo.isLoading ? (
          <div className="w-full flex flex-row justify-center items-center">
            <LoadingAnimation size={10} />
          </div>
        ) : (
          <DataErrorText
            dataError={DATA_ERROR.CAST}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        )}
      </div>
    </>
  );
};
export default Cast;
