import React, {Component} from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    ListView,
    Text
} from 'react-native'
import Todos from '../data/Todos'
import TodoItem from './Todo_Item'
import AddItem from './AddItem'

class TodoScreen extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        let todoItems = Todos
        this.state = {
            ds,
            newTask: '',
            addedItem: {},
            todoDatasource: ds.cloneWithRows(todoItems),
            todoItems
        }
        this.renderTodoItem = this.renderTodoItem.bind(this)
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this)
    }

    handleAddTodoItem(todoItem){
        let newItems = this.state.todoItems.slice(0)
        newItems.push(todoItem)
        let todoDatasource = this.state.ds.cloneWithRows(newItems)
        this.setState({
            todoDatasource: todoDatasource,
            todoItems: newItems
        })
    }

    renderTodoItem(todoItem) {
        return (
            <TodoItem item={todoItem}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <AddItem onAddTodo={this.handleAddTodoItem}/>
                <ListView
                    dataSource={this.state.todoDatasource}
                    renderRow={this.renderTodoItem}
                    enableEmptySections
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