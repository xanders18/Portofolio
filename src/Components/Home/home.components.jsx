import React, { Component } from 'react';

import {
    ThemeMode,
    HomeRope,
    HomeData,
    IconLogo,
    Image,
    HomeAdditional,
    HomeContainer,
    DownloadButton
} from './styles';

import { faPowerOff, faEdit, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

import SubHome from './Sub-Home/sub';

export class HomeComponent extends Component {
    state = {
        isHover: false,
        invertColor: false,
        show: false,
        showBox: false,
        showImg: false,
        stop:0
    };

    componentDidMount() {

        const formWidth = window.innerWidth;

        setTimeout(() => {
            this.setState({ show: !this.state.show });
        }, formWidth > 760 ? 100 : 0);

        setTimeout(() => {
            this.setState({ showImg: !this.state.showImg });
        }, formWidth > 760 ? 2000 : 0);

        setTimeout(() => {
            this.setState({ 
                showBox: !this.state.showBox                
            });
        }, formWidth > 760 ? 3000 : 0);

        setTimeout(() => {
            this.setState({ 
                stop:1
            });
        }, formWidth > 760 ? 4500 : 0);


    }

    mouseHover = () => {
        this.setState({
            isHover: !this.state.isHover
        });
    };

    colorChange = () => {
        this.setState({
            invertColor: !this.state.invertColor
        });
    };

    downloadHandler = () => {        
        window.open('https://portofolio-api.herokuapp.com/portofolio', "_blank")
    }

    render() {
        let data = {
            ui_ux: {
                icon: faEdit,
                title: 'UI/UX',
                list: ['Video/Image Editing', 'Youtube']
            },
            web: {
                icon: faGlobe,
                title: 'Web',
                list: ['MERN Development', '1 Year Experience', 'Good understanding']
            },
            android: {
                icon: faAndroid,
                title: 'Android',
                list: ['Java Development', '3 Month Experience']
            }
        };
        return (
            <HomeContainer invert={this.state.invertColor ? 1 : 0}>
                <ThemeMode invert={this.state.invertColor ? 1 : 0}>
                    <IconLogo
                        icon={faPowerOff}
                        onClick={this.colorChange}
                        invert={this.state.invertColor ? 1 : 0}></IconLogo>
                </ThemeMode>
                <HomeRope
                    invert={this.state.invertColor ? 1 : 0}
                    show={this.state.showBox ? 1 : 0}
                />
                <HomeData 
                    animation={this.state.stop}
                    hover={this.state.isHover}
                    invert={this.state.invertColor ? 1 : 0}
                    show={this.state.showBox ? 1 : 0}>
                    <h1>
                        <b>Alexander</b> Kevin
					</h1>
                    <h2>Software Developer</h2>
                    <DownloadButton
                        onMouseOver={this.mouseHover}
                        onMouseLeave={this.mouseHover}
                        onClick={this.downloadHandler}
                    >
                        Portofolio
					</DownloadButton>
                </HomeData>
                <Image
                    src={require('../../Assets/bg.png')}
                    show={this.state.showImg ? 1 : 0}
                />

                <HomeAdditional show={this.state.show}>
                    <SubHome show={this.state.show} animation={this.state.stop} {...data.web} />
                    <SubHome show={this.state.show} animation={this.state.stop} {...data.android} />
                    <SubHome show={this.state.show} animation={this.state.stop} {...data.ui_ux} />
                </HomeAdditional>
            </HomeContainer>
        );
    }
}

export default HomeComponent;
