
import LightIcon from '../icons/defense/LightIcon';
import HeavyIcon from '../icons/defense/HeavyIcon';
import SpecialIcon from '../icons/defense/SpecialIcon';
import ElasticIcon from '../icons/defense/ElasticIcon';

interface IArmorType {
   armorType: string;
  }

const ArmorType = ({armorType}: IArmorType) => (
    <>
        {armorType === "Light" ? <LightIcon /> :
           armorType === "Heavy" ? <HeavyIcon /> :
               armorType === "Special" ? <SpecialIcon /> :
                   armorType === "Elastic" ? <ElasticIcon /> : null}
    </>
)

export default ArmorType