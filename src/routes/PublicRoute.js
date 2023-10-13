import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import { Fragment } from "react";


const PublicRoute = () =>{

    const [data, setData] = useState([]);

    // const customerData = [
    //     {
    //         Id: 1,
    //         First_Name: 'James',
    //         Middle_Name: 'Allen',
    //         Last_Name: 'Maye',
    //         Suffix: 'III',
    //         Address1: '12345 Engineering Street',
    //         Address2: '',
    //         City: 'Venice',
    //         State: 'Hawaii',
    //         ZipCode: '67343',
    //         Email: 'jamestheengineer@yahoo.com',
    //         HomePhone: '+12167644482',
    //         MobilePhone: '',
    //         SSN: 'xxxxxxxxx',
    //         ProfileImg: 'pp.jpeg',
    //         UserLoginId: '1'
    //     }
    // ]

    const userLoginData = [
        {
            Id: 1,
            UserLogin: 'Login',
            Password: 'Password'
        },
        {
            Id: 2,
            UserLogin: 'Login2',
            Password: 'Password2'
        },
        {
            Id: 3,
            UserLogin: 'Login3',
            Password: 'Password3'
        }
    ]
    
    useEffect(()=>{
        configure();
    },[]);

    const configure = () =>{
        setData((prev) =>{
            let temp = {...prev}
            temp = userLoginData;

            return temp;
        });
    }


    return(
        <Fragment>
             <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Login</th>
                    <th>Password</th>
                    </tr>
                </thead>
               
                <tbody>
                    {
                        data.length > 0 ?
                        data.map((item, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{index +1}</td>
                                    <td>{item.Id}</td>
                                    <td>{item.UserLogin}</td>
                                    <td>{item.Password}</td>
                                </tr>
                            )
                        }): '...Loading'
                    }
                
                </tbody>
                </Table>
        </Fragment>
    )
}

export default PublicRoute;