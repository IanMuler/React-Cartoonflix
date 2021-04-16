import React, {Fragment} from 'react'

function AddAdded_btn(props) {
    
return(
    <Fragment>
    {!props.isAdded &&
    <div onClick={props.handleSetFavorite} className="buttons">
    {/* ADD */}
        <svg viewBox="0 0 24 24">
            <path d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" fill="currentColor"></path>
        </svg>
    </div>}

    {props.isAdded &&
    <div onClick={()=>{props.handleDeleteFavorite(props.id)}} className="buttons">
    <svg viewBox="0 0 24 24">
            <path fill="currentColor"
                d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
        </svg>
    </div>}
    </Fragment>
    )
    }

export default AddAdded_btn;