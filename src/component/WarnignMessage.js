
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { store } from 'react-notifications-component';



const WarnignMessage = ({state})=> {
    store.addNotification({
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });

      state(false)

}


export default WarnignMessage