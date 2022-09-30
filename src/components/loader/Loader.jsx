import { CircleLoader } from 'react-spinners'
import React from 'react'

export const GeneralLoader = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            minHeight:"100vh"
        }}>
            <CircleLoader color="#36d7b7" />
        </div>
    )
}
