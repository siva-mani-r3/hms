import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Roomelements2 = () => {
    const [search, setSearch] = useState("");
    const [rooms, setRooms] = useState([
        { id: 11, title: "Room1", description: "First floor room 1", image: "hostel.jpeg" },
        { id: 12, title: "Room2", description: "First floor room 2", image: "hostel.jpeg" },
        { id: 13, title: "Room3", description: "First floor room 3", image: "hostel.jpeg" },
        { id: 14, title: "Room4", description: "First floor room 4", image: "hostel.jpeg" },
        { id: 15, title: "Room5", description: "Second floor room 5", image: "hostel.jpeg" },
        { id: 16, title: "Room6", description: "Second floor room 6", image: "hostel.jpeg" },
        { id: 17, title: "Room7", description: "Second floor room 7", image: "hostel.jpeg" },
        { id: 18, title: "Room8", description: "Second floor room 8", image: "hostel.jpeg" },
    ]);

  
    const filteredRooms = rooms.filter(room =>
        room.title.toLowerCase().includes(search.toLowerCase()) ||
        room.description.toLowerCase().includes(search.toLowerCase())
    );
    
 
    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
           
            <div className="row mb-3">
                <div className="col-md-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search rooms..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
                     
            <div className='row mt-3'>
                {filteredRooms.map(room => (
                    <div className='col-md-3' key={room.id}>
                        <div className="card" style={{ boxShadow: "3px 3px 3px 3px silver", marginTop: "10px" }} id='container'>
                            <img className="card-img-top" src={room.image} alt={`${room.title} image`} />
                            <div className="card-body">
                                <h2 className="card-title">{room.title}</h2>
                                <p className="card-text">{room.description}</p>
                                <Link to={`/users${room.id}`} className="btn btn-info" style={{margin:"5px"}}>See Details</Link>
                              
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roomelements2;
