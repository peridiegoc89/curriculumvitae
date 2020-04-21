import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData';


const GlobalStyled = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f5;
    }
`;


const App = () => {
    const data = useGetData();
    console.log(data);
    //tengo una validacion para que esperar que carguen las cosas desde la api
    //cuando no hay datos, me sale un msj, sino, me muestra todo el componente main
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main>
            <GlobalStyled/>
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}
                />
            </Sidebar>
            <Info>
                <Education
                    data={data.education}
                />
                <Experience
                    data={data.experience}
                />
                <Certificates
                    data={data.certificate}
                />
                <Skills
                    data={data.skills}
                />
            </Info>
        </Main>
    );
}

export default App;