import React, {Component} from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    ListView,
    Text
} from 'react-native'
import Todos from '../data/Todos'

class TodoScreen extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        let todoItems = Todos
        this.state = {
            newTask: '',
            todoDatasource: ds.cloneWithRows(todoItems),
            todoItems
        }
        this.handleTaskChanged = this.handleTaskChanged.bind(this)
        this.renderTodoItem = this.renderTodoItem.bind(this)
    }

    renderTodoItem(todoItem) {
        return (
            <View style={styles.todo}>
                <Text>{todoItem.name}</Text>
                <Text style={styles.todoDate}>{todoItem.date.toDateString()}</Text>
            </View>
        )
    }

    handleTaskChanged(text) {
        this.setState({newTask: text})
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.newTaskInputText}
                    placeholder={'New task'}
                    value={this.state.newTask}
                    onChangeText={this.handleTaskChanged}
                    multiline = {false}
                    numberOfLines = {1}
                />
                <View style={styles.newTodoDateTime}>
                    <Text style={styles.newTodoDate}>Date:</Text>
                    <Text>Time:</Text>
                </View>
                <ListView
                    dataSource={this.state.todoDatasource}
                    renderRow={this.renderTodoItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 48,
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 16
    },
    newTaskInputText: {
        borderWidth: 1,
        height: 48,
        borderColor: 'gray',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 16
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    newTodoDateTime: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1
    },
    newTodoDate: {
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todoDate: {
        textAlign: 'right'
    }
});

export default TodoScreen