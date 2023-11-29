// screens/GameScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Plane from '../components/Plane';
import Obstacles from '../components/Obstacles';
import Physics from '../systems/Physics';

const GameScreen = () => {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);

  const onEvent = (e) => {
    if (e.type === 'game-over') {
      setRunning(false);
    } else if (e.type === 'score') {
      setScore(score + 1);
    }
  };

  const startGame = () => {
    setScore(0);
    setRunning(true);
  };

  const generateObstacles = () => {
    const topObstacleHeight = Math.floor(Math.random() * 100) + 100;
    const bottomObstacleHeight = Dimensions.get('window').height - topObstacleHeight - 200;
    return {
      obstacle1: { body: { position: { x: 300, y: 0 } }, size: { width: 60, height: topObstacleHeight }, renderer: <Obstacles /> },
      obstacle2: { body: { position: { x: 300, y: Dimensions.get('window').height - bottomObstacleHeight } }, size: { width: 60, height: bottomObstacleHeight }, renderer: <Obstacles /> },
    };
  };

  return (
    <View style={styles.container}>
      {!running && (
        <TouchableOpacity onPress={startGame}>
          <Text style={styles.startText}>Start Game</Text>
        </TouchableOpacity>
      )}
      <GameEngine
        style={styles.gameContainer}
        running={running}
        onEvent={onEvent}
        entities={{
          physics: { engine: {}, world: {} },
          plane: { body: { position: { x: 50, y: 300 }, velocity: { x: 0, y: 0 } }, renderer: <Plane /> },
          ...generateObstacles(),
        }}
        systems={[Physics]}
      >
        <Text style={styles.score}>Score: {score}</Text>
      </GameEngine>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  startText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  score: {
    position: 'absolute',
    fontSize: 30,
    top: 10,
    left: 10,
  }
});

export default GameScreen;
