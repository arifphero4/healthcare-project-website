import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import {useServices} from '../../App'

const Details = () => {
    const history = useHistory();
    const {id }= useParams(); 
    const [details]=useContext(useServices);
    const findService = details.find(service => service.id === Number(id))
    const {title, img, detail, phone, address, email}= findService;
    return (
        <div>
            {
                findService?
                <div>
                    <div><img src={img} alt="" /></div>
                    <div>
                        <h2>{title}</h2>
                        <p>{detail}</p>
                        <p>{phone} </p>
                        <p>{email}</p>
                        <p>{address}</p>

                    </div>

                </div>
                
                :history.push('/home')
            }
        </div>
    );
};

export default Details;