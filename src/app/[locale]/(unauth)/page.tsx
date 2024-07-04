import { getTranslations } from "next-intl/server";
import TabsBarWithUnderlineMain from "src/components/tailwind-ui/application-ui/navigation/tabs/bar_with_underline_main";
import HeroSimpleCentredWithBackgroundImage from "src/components/tailwind-ui/marketing/sections/heroes/simple_centered_with_background_image";
import {
  SportsEsports,
  SportsSoccer,
  Hiking,
  Pool,
  SportsScore,
  SportsBasketball,
  Sailing,
  SportsBar,
  SportsTennis,
  VideogameAsset,
  SportsGymnastics,
  SportsMotorsports,
  Surfing,
  SportsKabaddi,
  Sports,
  GolfCourse,
  SportsVolleyball,
  SportsBaseball,
  SportsMartialArts,
  DownhillSkiing,
  Scoreboard,
  Kayaking,
  SportsFootball,
  SportsHandball,
  Skateboarding,
  SportsGolf,
  SportsCricket,
  NordicWalking,
  RollerSkating,
  Kitesurfing,
  SportsMma,
  Paragliding,
  Snowboarding,
  SportsHockey,
  IceSkating,
  Snowshoeing,
  SportsRugby,
  Sledding,
  Snowmobile,
  VideogameAssetOff,
} from "@mui/icons-material";
export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Index() {
  return (
    <div>
      <TabsBarWithUnderlineMain />
      <div className="w-full">
        <ul className="flex space-x-4">
          <li>
            <SportsEsports />
          </li>
          <li>
            <SportsSoccer />
          </li>
          <li>
            <Hiking />
          </li>
          <li>
            <Pool />
          </li>
          <li>
            <SportsScore />
          </li>
          <li>
            <SportsBasketball />
          </li>
          <li>
            <Sailing />
          </li>
          <li>
            <SportsBar />
          </li>
          <li>
            <SportsTennis />
          </li>
          <li>
            <VideogameAsset />
          </li>
          <li>
            <SportsGymnastics />
          </li>
          <li>
            <SportsMotorsports />
          </li>
          <li>
            <Surfing />
          </li>
          <li>
            <SportsKabaddi />
          </li>
          <li>
            <Sports />
          </li>
          <li>
            <GolfCourse />
          </li>
          <li>
            <SportsVolleyball />
          </li>
          <li>
            <SportsBaseball />
          </li>
          <li>
            <SportsMartialArts />
          </li>
          <li>
            <DownhillSkiing />
          </li>
          <li>
            <Scoreboard />
          </li>
          <li>
            <Kayaking />
          </li>
          <li>
            <SportsFootball />
          </li>
          <li>
            <SportsHandball />
          </li>
          <li>
            <Skateboarding />
          </li>
        </ul>

        <ul className="flex space-x-4 mt-2">
          <li>
            <SportsGolf />
          </li>
          <li>
            <SportsCricket />
          </li>
          <li>
            <NordicWalking />
          </li>
          <li>
            <RollerSkating />
          </li>
          <li>
            <Kitesurfing />
          </li>
          <li>
            <SportsMma />
          </li>
          <li>
            <Paragliding />
          </li>
          <li>
            <Snowboarding />
          </li>
          <li>
            <SportsHockey />
          </li>
          <li>
            <IceSkating />
          </li>
          <li>
            <Snowshoeing />
          </li>
          <li>
            <SportsRugby />
          </li>
          <li>
            <Sledding />
          </li>
          <li>
            <Snowmobile />
          </li>
          <li>
            <VideogameAssetOff />
          </li>
        </ul>

        {/* <HeroSimpleCentredWithBackgroundImage /> */}
      </div>
    </div>
  );
}
