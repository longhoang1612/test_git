import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor====>');
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log('shouldComponentUpdate====>');
  }

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot: SS,
  ): void {
    console.log('componentDidUpdate====>');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount====>');
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
  ): SS | null {
    console.log('getSnapshotBeforeUpdate====>');
  }

  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): boolean {
    console.log('shouldComponentUpdate====>');
    return true;
  }

  render() {
    console.log('render====>');
    const {counter} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text>{counter}</Text>
          <Button
            title="Press me"
            onPress={() =>
              this.setState((prevState) => ({counter: prevState.counter + 1}))
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});