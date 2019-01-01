import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { addTask , inputTask } from "../actions/tasks";

function mapStateToProps({ tasks}) {
	return {
		task: tasks.task,
		tasks: tasks.tasks
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addTask: (task) => {
			dispatch(addTask(task));
		},
		inputTask: (task) => {
			dispatch(inputTask(task))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
