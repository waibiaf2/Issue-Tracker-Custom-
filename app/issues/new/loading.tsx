import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingNewIssuePage = () => {
    return (
        <div>
            <Skeleton height="200px" className="max-w-xl"/>
        </div>
    );
};

export default LoadingNewIssuePage;