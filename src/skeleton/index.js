import "./style.css";
import Twinkle from '../twinkle'
export default function Skeleton({ type }) {
    const classes = `skeleton-${type}`;
    return (
        <div className="skeleton-wrapper">
            <div className={classes}>
                <Twinkle />
            </div>
            
        </div>
    )
}