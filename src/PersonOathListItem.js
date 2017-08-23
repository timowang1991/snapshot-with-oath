import React from 'react';
import headIcon from './assets/head-icon-6519.png'

function PersonOathListItem (props) {
    if (!props) {
        return null;
    }

    const {
        name,
        info: {
            image = headIcon,
            oath
        }
    } = props;

    return (
        <li className="list-item-wrapper">
            <div
                className="list-item-image-wrapper"    
            >
                <img
                    className="list-item-image"
                    src={image}
                    alt=""
                />
                <div className="person-oath-list-item-name">
                    {name}
                </div>
            </div>
            <ul className="person-oath-list-wrapper">
                {
                    [].concat(oath).map((item, idx) => 
                        <li
                            key={`person-oath-list-${item}-${idx}`}
                            className="person-oath-list-item"
                        >
                            <blockquote>
                                {item}
                                <br />
                            </blockquote>
                        </li>
                    )
                }
            </ul>
        </li>
    );
}

PersonOathListItem.displayName = 'PersonOathListItem';

export default PersonOathListItem;
