import "./style.css";
import Twinkle from '../twinkle'
export default function Skeleton({ type }) {
    const classes = `skeleton-${type}`;
    return (
        <>
            <div className={classes}></div>
            <Twinkle />
        </>
    )
}