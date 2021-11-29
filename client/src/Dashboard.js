import React from 'react';
import './Dashboard.css';
import mainLogo from './bruinsource_logo.png'
import searchIcon from './search_icon.png'
import history from './history';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          projects: this.ProjectList()
        }
    }
    ProjectList() {
        return $.getJSON('https://')
        .then(function(data) {
          return data.results;
        });
    }
    render() {
        return (
            <div className="Dashboard">
                <img src={mainLogo} className="MainLogo" alt="mainLogo"/>
                <h2> My Projects </h2>
                <form>
                    <input
                    type="text"
                    placeholder="Search for a project..."
                    />
                </form>
                <button type="button" className="Search"> 
                    <img src={searchIcon} width="50px" alt="searchIcon" ></img>
                </button>
                <button type="button" className="Create" onClick={() => history.push('/createproject')}>Create New Project</button>
                <div className="ProjectList">
                    <table className="ProjectListTable">
                        <thead className="ProjectListTableHead">
                            <tr>
                                <td>NAME</td>
                                <td>OWNER</td>
                                <td>DATE JOINED</td>
                                <td>COLLABORATORS</td>
                            </tr>
                        </thead>
                        <tbody>
                            for project in this.state.projects {
                                <tr>
                                    <td>project.id</td>
                                    <td>project.author</td>
                                    <td>task.date_created</td>
                                    <td>task.collaborators</td>
                                </tr>
                            });
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dashboard;