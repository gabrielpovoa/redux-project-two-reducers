import React, { ChangeEvent, useState } from "react";

import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setName, setAge } from "../../redux/reducers/userReducer";
import { setThemeStatus } from "../../redux/reducers/themeReducer";

import * as C from './style'
import Header from "../Header";

import Global from "../../GlobalStyle/Global";
import Footer from "../Footer";

export const Home = () => {
  const dispatch = useDispatch()
  const user = useAppSelector(state => state.user)
  const theme = useAppSelector(state => state.theme)

  const changeName = (newName: string) => { dispatch(setName(newName)) }
  const cahngeAge = (newAge: number) => { dispatch(setAge(newAge)) }
  const switchTheme = (newTheme: string) => { dispatch(setThemeStatus(newTheme)) }

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => { changeName(e.target.value) }
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => { cahngeAge(parseInt(e.target.value)) }
  const handlSwitchtheme = () => {switchTheme(theme.status === 'light' ? 'dark' : 'light')}



  return <>
    <Global />
    <Header />
    <C.Container>
      <C.ClientInfo>
        <p>My name is: {user.name}</p>
        <p>I`m {user.age} </p>
      </C.ClientInfo>
      <C.ClientUpdate>
        <p>
          [EDIT YOUR INFO HERE]
        </p>
        <div className="client">
          <input
            type="text"
            className="box"
            value={user.name}
            onChange={handleNameInput}
            placeholder="enter you name"
          />
          <input
            type="text"
            className="box"
            value={user.age}
            onChange={handleAgeInput}
            placeholder="enter your age"
          />
          <button>[SAVE CHANGES]</button>
        </div>
      </C.ClientUpdate>
      <C.Border />
      <C.ThemeStatus>
        <p>Theme: {theme.status}</p>
        <button onClick={handlSwitchtheme}>[SWITCH THEME]</button>
      </C.ThemeStatus>
    </C.Container>
    <Footer />
  </>
}

export default Home