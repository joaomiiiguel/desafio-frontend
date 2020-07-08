import React from 'react'

export default function ImovelList({imovel}) {
    return (
        <div>
            {imovel.data._id.$id}
        </div>
    )
}
