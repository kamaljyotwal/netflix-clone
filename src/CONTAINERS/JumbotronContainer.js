// This component is just mapping and rendering data to UI,
//  making this component to keep the app.jsx cleaner.

import React from 'react'
import jumboData from "../JSON/jumboData.json";
import Jumbotron from '../COMPONENTS/jumbotron'

export default function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((i) => (
                <Jumbotron key={i.id} direction={i.direction}>
                    <Jumbotron.Panel>
                        <Jumbotron.Title>{i.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{i.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Panel>

                    <Jumbotron.Panel>
                        <Jumbotron.Image src={i.image} alt={i.alt} />
                    </Jumbotron.Panel>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}
