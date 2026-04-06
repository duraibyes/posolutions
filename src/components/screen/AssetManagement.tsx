import AssetHero from "../sections/asset-managment/AssetHero"
import PortfolioFeatures from "../sections/asset-managment/PortfolioFeatures"
import PortfolioValueSection from "../sections/asset-managment/PortfolioValueSection"
import UnlockPotential from "../sections/asset-managment/UnlockPotential"
import WhyChooseAsset from "../sections/asset-managment/WhyChooseAsset"

const AssetManagement = () => {
    return (
        <div>
            <AssetHero />
            <PortfolioValueSection />
            <PortfolioFeatures />
            <WhyChooseAsset />
            <UnlockPotential />
        </div>
    )
}

export default AssetManagement