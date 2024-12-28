import { Component } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

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


        return (
            <div className="mt-[50px] flex flex-row gap-6 overflow-x-auto">
                {stagesTasks.map((tasks, i) => { // [task2, task 7], 1
                    return (
                        <div
                            className="card bg-white shadow-lg border border-gray-200 rounded-lg p-4 flex-1 min-w-[250px]"
                            key={`${i}`}
                        >
                            <div className="card-text">
                                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                                    {this.stagesNames[i]}
                                </h4>
                                <ul
                                    className="space-y-4"
                                    data-testid={`stages-${i}`}
                                >
                                    {tasks.map((task, index) => {
                                        const isFirstCard = i == 0
                                        const isLastCard = i == (this.stagesNames.length - 1)
                                        return (
                                            <li
                                                className="slide-up-fade-in bg-gray-50 rounded-lg p-3 shadow-md flex items-center justify-between"
                                                key={`${i}${index}`}
                                            >
                                                <div
                                                    className="li-content flex items-center justify-between w-full"
                                                >
                                                    <span
                                                        className="text-gray-700 font-medium"
                                                        data-testid={`${task.name.split('').join('-')}-name`}
                                                    >
                                                        {task.name}
                                                    </span>
                                                    <div className="icons flex space-x-2">
                                                        <button
                                                            disabled = {isFirstCard}
                                                            onClick={ () => { console.log("Clicked back")}}
                                                            className="icon-only x-small p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                                            data-testid={`${task.name.split(' ').join('-')}-back`}
                                                        >
                                                            <ArrowLeftIcon className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            disabled = {isLastCard}
                                                            onClick={() => { console.log("Clicked forward")}}
                                                            className="icon-only x-small p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                                                            data-testid={`${task.name.split(' ').join('-')}-forward`}
                                                        >
                                                            <ArrowRightIcon className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        );

    }
}