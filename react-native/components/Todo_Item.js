import React, {Component} from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    ListView,
    Text
} from 'react-native'

class TodoItem extends Component {
    render() {
        return (
            <View style={styles.todo}>
                <Text>{this.props.item.name}</Text>
                <Text style={styles.todoDate}>{this.props.item.date.toDateString()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    todoDate: {
        textAlign: 'right'
    }
});

export default TodoItem