'use client';
import {FC, ReactNode} from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';


type props = {
    children:ReactNode;
}

const ReduxProviders:FC<props> = ({children}):JSX.Element => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export {ReduxProviders};