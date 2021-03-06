// App.js > ProjectList.jsx > ProjectListElem.jsx > ProjectCollaboratorCard.jsx

// react
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// style
import './css/ProjectCollaboratorCard.css';

// components

// start
export default function ProjectCollaboratorCard({projectNavObj}){
    // destructuring
    const {collaborators} = projectNavObj;

    // states
    const [collaboratorsArr] = useState(collaborators ? collaborators: [])

    // functions
    const buildCollaboratorList = () => {
        return collaboratorsArr.map((collaborator, idx) => {
            return(
                <div className="collaborator"  key={`collab-name-${idx}`}>
                    <Link to={`/${collaborator['username']}/`}>{collaborator['username']}</Link>
                </div>
            )
        })
    }

    return(
        <div className="ProjectCollaboratorCard fade-in noselect" key={`pcc--${projectNavObj['user']['username']-projectNavObj['project_slug']}`} >
            <div className="title">Add</div>
            <div className="collaborator-container">
                {buildCollaboratorList(collaborators)}
            </div>
        </div>
    )
}