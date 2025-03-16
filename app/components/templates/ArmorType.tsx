
import LightIcon from '../icons/defense/LightIcon';
import HeavyIcon from '../icons/defense/HeavyIcon';
import SpecialIcon from '../icons/defense/SpecialIcon';
import ElasticIcon from '../icons/defense/ElasticIcon';

interface ArmorTypeProps {
   armorType: string;
  }

const ArmorType = ({armorType}: ArmorTypeProps) => (
    <>
        {armorType === "Light" ? <LightIcon /> :
           armorType === "Heavy" ? <HeavyIcon /> :
               armorType === "Special" ? <SpecialIcon /> :
                   armorType === "Elastic" ? <ElasticIcon /> : null}
    </>
)

export default ArmorType