import React, {Component} from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    ListView,
    Text
} from 'react-native'

class TodoScreen extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        let todoItems = ['task 1', 'task 2']
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
            <Text>{todoItem}</Text>
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
});

export default TodoScreen