import type { FC } from 'react';
import { GameListItemWrapper, Item, ItemData, Name, Rating, Date } from './GameListItem.styled';
import type { Timestamp } from 'firebase/firestore';

interface GameListItemProps {
   key: string,
   game: string,
   rating: number,
   createdAt?: Timestamp
}

const GameListItem: FC<GameListItemProps> = (props) => {
   const getDate = props.createdAt 
      ? props.createdAt.toDate().toLocaleDateString() 
      : '';
   
   return (
      <GameListItemWrapper>
         <Item>
            <ItemData>
               <Name>{props.game}<Date>Completed at: {getDate}</Date></Name>
               <Rating>{props.rating}</Rating>
            </ItemData>
            
         </Item>
      </GameListItemWrapper>
   );
};

export default GameListItem;
