import React, { useEffect } from 'react';
import Menu from './Menu';
import Banner from './Banner';
import "../../styles/Home.css";
import AboutUs from "../../components/AboutUs.js";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Home = ({onLoginChange}) => {
    // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["accessToken"]);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");

    if (accessToken) {
      setCookie("accessToken", accessToken, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      navigate("/", { replace: true });
      onLoginChange(true);
    }
  }, [setCookie, navigate,onLoginChange]);
    return (
        <>
            <div className='home-container'>
                <Banner />
                <Menu />
            </div>
            <div>
                <AboutUs/>
            </div>
        </>
    );
};

export default Home;