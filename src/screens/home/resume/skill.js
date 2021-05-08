import React from 'react';

export const SkillBar = (props) => {
    return <li className="skill__item">
        <em>{props.name}</em>
        <span className={`level-${props.level}`}></span>
    </li>;
}