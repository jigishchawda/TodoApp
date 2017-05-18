import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ListView,
    Text
} from 'react-native'

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Hello',
        }
        this.handleTaskChanged = this.handleTaskChanged.bind(this)
    }

    handleTaskChanged(text) {
        this.setState({
            title: text
        })
    }

    render() {
        return (
            <View style={styles.addTodoContainer}>
                <TextInput style={styles.newTaskInputText}
                           placeholder={'New task'}
                           onChangeText={this.handleTaskChanged}
                           multiline = {false}
                           numberOfLines = {1}
                />
                <TouchableOpacity style={styles.addButton}
                    onPress={() => this.props.onAddTodo({name: this.state.title, date: new Date()})}>
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

export default AddItem