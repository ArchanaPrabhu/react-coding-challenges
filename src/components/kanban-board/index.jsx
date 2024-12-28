import { Component } from "react";
export default class KanbanBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks
        };
        this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
    }

    render() {
        const { tasks } = this.state;
        let stagesTasks = [];
        for (let i = 0; i < this.stagesNames.length; i++) {
            stagesTasks.push([]);
        }

        for (let task of tasks) {
            const stageId = task.stage;
            stagesTasks[stageId].push(task)
        }
        return(
            <div className="mt-50 flex">
                {
                    stagesTasks.map((task, i) => {
                        return (
                            <div className="card outlined ml-20 mt-0" key={`${i}`}>
                                <div className="card-text">
                                    <h4> {this.stagesNames[i]}</h4>
                                    <ul className="mt-50" data-testid={`stages-${i}`}>
                                        {
                                            tasks.map((task, index) => {
                                                return <li className="slide-up-fade-in" key={`${i}${index}`}>
                                                    <div className="li-content ;ayout-row justify-content-">
                                                        <span data-testid={`${task.name.split('').join('-')}-name`}>{task.name}</span>
                                                        <div className="icons">
                                                            <button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`}>
                                                                <i className="material-icons">back</i>
                                                            </button>
                                                            <button className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`}>
                                                                <i className="material-icons">forward</i>
                                                            </button>

                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )

                    })
                }
            </div>)
    }
}