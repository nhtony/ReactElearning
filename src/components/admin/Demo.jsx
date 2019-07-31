import React from 'react'



function TinhTong(a, b) {
    return a + b;
}

export default function Demo() {
    let res = TinhTong(2, 4);
    return (
        <divh>
            <h1>Helll</h1>
            {res}
        </divh>
    )
}
