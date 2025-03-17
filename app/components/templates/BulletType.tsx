
import ExplosiveIcon from '../icons/attack/ExplosiveIcon'
import SonicIcon from '../icons/attack/SonicIcon'
import MysticIcon from '../icons/attack/MysticIcon'
import PiercingIcon from '../icons/attack/PiercingIcon'

interface IBulletType {
    bulletType: string;
  }

const BulletType = ({bulletType}: IBulletType) => (
    <>
        {bulletType === "Explosive" ? <ExplosiveIcon /> :
            bulletType === "Sonic" ? <SonicIcon /> :
                bulletType === "Mystic" ? <MysticIcon /> :
                    bulletType === "Piercing" ? <PiercingIcon /> : null}
    </>
)

export default BulletType