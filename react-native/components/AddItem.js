import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ListView,
    Text
} from 'react-native'

class TodoItem extends Component {
    render() {
        return (
            <View style={styles.addTodoContainer}>
                <TextInput style={styles.newTaskInputText}
                           placeholder={'New task'}
                           onChangeText={this.handleTaskChanged}
                           multiline = {false}
                           numberOfLines = {1}
                />
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addTodoContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    newTaskInputText: {
        borderWidth: 1,
        height: 40,
        borderColor: 'gray',
        // fontSize: 20,
        textAlign: 'center',
        flex: 0.8
    },
    addButton: {
        flex: 0.2,
        alignSelf: 'center',
        padding: 10,
        marginLeft: 10,
        backgroundColor: 'gray',
    },
    addText: {
        textAlign: 'center'
    }
});

export default TodoItem