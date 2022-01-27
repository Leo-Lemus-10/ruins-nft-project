import React from 'react';
import CollectionCard from './CollectionCard';
import "./RuinList.css"

const RuinList = ({ruinListData}) => {
    const price = 0.12;  
  return (
    <div className="ruinList">
        {ruinListData.map((ruin) => (
            <CollectionCard
            key={ruin.token_id}
            id={ruin.token_id}
            name={ruin.description}
            price={price}
            image={ruin.image_url}
        />
        ))}
    </div>
  )
};

export default RuinList;
