import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const getRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

export default function Statistics({title, stats}) {
    return (
        <section className={css.statistics}>

            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css["stat-list"]}>
                {stats.map(stat => (
                    <li 
                    className={css.item}  
                    key={stat.id} 
                    style={{
                        backgroundColor: getRandomColor(),
                    }}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>

        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
  };