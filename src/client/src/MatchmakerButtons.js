import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Axios from 'axios';


    class Buttons extends React.Component {
<<<<<<< HEAD

        constructor(props) {
            super(props);
            this.data = {}
        }
=======
        
>>>>>>> 8be3267b02f6b50cf73ac26923c62b96c11e0c1d

        render() {
            return (
                <div>
        <IconButton 
            size="large" 
            aria-label="no"
            onClick={() => {
                Axios({
                  method: "GET",
                  withCredentials: true,
                  url: "http://localhost:5000/matchMaking",
                }).then((res) => this.data = {name: res.name, age: res.age, profession: res.pastProfession});

                Axios({
                    method: "POST",
                    data:{choice:false},
                    withCredentials: true,
                    url: "http://localhost:5000/matchMaking",
                }).then((res) => this.data = {name: res.name, age: res.age, profession: res.pastProfession});
                console.log(this.data);
            }}>
                
                <ClearIcon />
        </IconButton>

        <IconButton 
            size="large" 
            aria-label="yes"
<<<<<<< HEAD
            onClick={() => {
                Axios({
                  method: "GET",
                  withCredentials: true,
                  url: "http://localhost:5000/matchMaking",
                }).then((res) => this.data = {name: res.name, age: res.age, profession: res.pastProfession});

                Axios({
                    method: "POST",
                    data:{choice:false},
                    withCredentials: true,
                    url: "http://localhost:5000/matchMaking",
                }).then((res) => this.data = {name: res.name, age: res.age, profession: res.pastProfession});
                console.log(this.data);
            }}>
                
=======
            >
>>>>>>> 8be3267b02f6b50cf73ac26923c62b96c11e0c1d
                <CheckIcon />
        </IconButton>
        </div>
        )
        }
    }
export default Buttons;