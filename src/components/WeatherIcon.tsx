import { IconBaseProps, IconType } from 'react-icons';
import {
  WiCloudy,
  WiDayCloudy,
  WiDayFog,
  WiDayHaze,
  WiDayRainMix,
  WiDayShowers,
  WiDaySnow,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDust,
  WiFog,
  WiHail,
  WiLightning,
  WiNa,
  WiRain,
  WiRainMix,
  WiSandstorm,
  WiShowers,
  WiSleet,
  WiSmoke,
  WiSnow,
  WiStrongWind,
  WiThunderstorm,
  WiTornado,
} from 'react-icons/wi';
import { Condition } from '@/utils/owm-client/types';

const iconsMap: Record<Condition, IconType> = {
  [Condition.ThunderstormRainLight]: WiThunderstorm,
  [Condition.ThunderstormRain]: WiThunderstorm,
  [Condition.ThunderstormRainHeavy]: WiThunderstorm,
  [Condition.ThunderstormLight]: WiLightning,
  [Condition.ThunderstormNormal]: WiLightning,
  [Condition.ThunderstormHeavy]: WiLightning,
  [Condition.ThunderstormRagged]: WiLightning,
  [Condition.ThunderstormDrizzleLight]: WiThunderstorm,
  [Condition.ThunderstormDrizzle]: WiThunderstorm,
  [Condition.ThunderstormDrizzleHeavy]: WiThunderstorm,

  [Condition.DrizzleNormal]: WiShowers,
  [Condition.DrizzleLight]: WiShowers,
  [Condition.DrizzleHeavy]: WiShowers,
  [Condition.DrizzleRainLight]: WiShowers,
  [Condition.DrizzleRain]: WiShowers,
  [Condition.DrizzleRainHeavy]: WiShowers,
  [Condition.DrizzleRainShower]: WiShowers,
  [Condition.DrizzleRainShowerHeavy]: WiShowers,
  [Condition.DrizzleShower]: WiShowers,

  [Condition.RainLight]: WiDayRainMix,
  [Condition.RainModerate]: WiDayRainMix,
  [Condition.RainHeavy]: WiRain,
  [Condition.RainVeryHeavy]: WiHail,
  [Condition.RainExtreme]: WiHail,
  [Condition.RainFreezing]: WiRainMix,
  [Condition.RainShowerLight]: WiDayShowers,
  [Condition.RainShower]: WiShowers,
  [Condition.RainShowerHeavy]: WiShowers,
  [Condition.RainRaggedShower]: WiShowers,

  [Condition.SnowLight]: WiDaySnow,
  [Condition.SnowNormal]: WiSnow,
  [Condition.SnowHeavy]: WiSnow,
  [Condition.SnowSleet]: WiSnow,
  [Condition.SnowSleetShowerLight]: WiSleet,
  [Condition.SnowSleetShower]: WiSleet,
  [Condition.SnowMixedLight]: WiRainMix,
  [Condition.SnowMixed]: WiRainMix,
  [Condition.SnowShowerLight]: WiDaySnow,
  [Condition.SnowShower]: WiDaySnow,
  [Condition.SnowShowerHeavy]: WiDaySnow,

  [Condition.Mist]: WiDayFog,
  [Condition.Smoke]: WiSmoke,
  [Condition.Haze]: WiDayHaze,
  [Condition.DustWhirls]: WiDust,
  [Condition.Fog]: WiFog,
  [Condition.Sand]: WiSandstorm,
  [Condition.Dust]: WiDust,
  [Condition.Ash]: WiDust,
  [Condition.Squall]: WiStrongWind,
  [Condition.Tornado]: WiTornado,

  [Condition.Clear]: WiDaySunny,
  [Condition.CloudsFew]: WiDaySunnyOvercast,
  [Condition.CloudsScattered]: WiDayCloudy,
  [Condition.CloudsBroken]: WiCloudy,
  [Condition.CloudsOvercast]: WiCloudy,
};

interface Props extends IconBaseProps {
  condition: Condition;
}

function WeatherIcon({ condition, ...other }: Props) {
  const Component = iconsMap[condition] ?? WiNa;
  return <Component {...other} />;
}

export default WeatherIcon;
