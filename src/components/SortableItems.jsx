import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {  ListCollapse } from 'lucide-react';

export default function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div ref={setNodeRef} style={style} {...attributes} >
           <div className='flex gap-2 bg-white px-4 mb-3 rounded-lg'>
               <button {...listeners}>
                <ListCollapse />
            </button>
      
             {props.children}
           </div>
    </div>
  );
}